<template>
  <f7-page name="ahrs">
    <f7-navbar title="AHRS"></f7-navbar>

    <f7-block-title>This is AHRS</f7-block-title>

    <f7-block>
      {{ahrsStatus}}
    </f7-block>

    <f7-block>      
      <ul id="ahrsData">
        <li :key=index v-for="(value, name, index) in ahrsData">
          {{ name }}: {{ value }}
        </li>
      </ul>
    </f7-block>

    <f7-block>
      <div id="pixi-ahrs"></div>
    </f7-block>
  </f7-page>
</template>

<script>
import * as PIXI from "pixi.js";

var URL_HOST = "192.168.1.1";
var URL_PORT = null;
var URL_HOST_BASE = URL_HOST + ( URL_PORT ? ":" + URL_PORT : ""); 
var URL_WS = "ws://"
var URL_HTTP = "http://"

var URL_GPS_WS = URL_WS + URL_HOST_BASE + "/situation";

export default {
  name: "Ahrs",
  data() {
    return {
      //app: null,
      renderer:null,
      stage: null,
      gLadder: null,
      gLabels: null,
      pkeys: [],
      pitch: 0,
      roll: 0,
      heading: 0,
      slipSkid: 0,
      altitude: 0,
      messages: [],

      ahrsSocket: null,
      ahrsStatus: "disconnected",
      ahrsData: "",
    };
  },
  created() {
    //window.addEventListener('keydown', this.onKeyDown);
    //window.addEventListener('keyup', this.onKeyUp);
  },
  beforeDestroy() {
    this.disconnectWebsocket();
    //window.removeEventListener('keydown', this.onKeyDown);
    //window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('resize', this.onWindowResize);
  },
  mounted() {

    this.$nextTick(function() {
      window.addEventListener('resize', this.onWindowResize);
      //Init
      this.onWindowResize()
    })
    this.initGraphics();
    this.connectWebsocket();

  },
  methods: {

    /*
    onKeyDown(e) {
      var code = e.keyCode ? e.keyCode : e.which;
      this.pkeys[code]=true;
    },
    
    onKeyUp(e) {
      var code = e.keyCode ? e.keyCode : e.which;
      this.pkeys[code]=false;
    },
    */

    onWindowResize(event) {
      this.renderer.resize(window.innerWidth, window.innerHeight);
    },

    gLadderDraw() {
      const g = this.gLadder;
      const w = this.renderer.width;
      const h = this.renderer.height;

      // Skybox
      g.lineStyle(0);
      g.beginFill(0x5555FA); // Blue
      g.drawRect(-w, -h, w*2, h*2); // drawRect(x, y, width, height)
      g.endFill();

      // Groundbox
      g.lineStyle(0);
      g.beginFill(0x654321); // Blue
      g.drawRect(-w, 0, w*2, h*2); // drawRect(x, y, width, height)
      g.endFill();

      // Ladder
      for (var i=0; i<5; i++) {
        g.lineStyle(1, 0xffffff)
        g.moveTo(-w/2, i*30);
        g.lineTo(w/2, i*30);
        g.moveTo(-w/2, -i*30);
        g.lineTo(w/2, -i*30);
      }

    },

    gLabelsDraw() {
      const g = this.gLabels;
      const w = this.renderer.width;
      const h = this.renderer.height;

      // Arc
      g.lineStyle(2, 0xffffff)
      g.arc(0, 0, w/2, Math.PI, 0);
      
      // Plane
      g.lineStyle(1, 0xffffff)
      g.moveTo(w/4, 0)
      g.lineTo(w/4, 0)
    },

    initGraphics() {

      // Read here about game loop control:
      // https://github.com/pixijs/pixi.js/wiki/v5-Custom-Application-GameLoop
      let ticker = PIXI.Ticker.shared;
      // Set this to prevent starting this ticker when listeners are added.
      // By default this is true only for the PIXI.Ticker.shared instance.
      ticker.autoStart = false;
      // FYI, call this to ensure the ticker is stopped. It should be stopped
      // if you have not attempted to render anything yet.
      ticker.stop();
      // Call this when you are ready for a running shared ticker.
      //ticker.start();
      // To use the ticker loop:
      //ticker.add(function (time) {
      //    renderer.render(stage);
      //});
      // To update completely manual:
      // function animate(time) {
      //   ticker.update(time);
      //   renderer.render(stage);
      //   requestAnimationFrame(animate);
      // }
      // animate(performance.now());

      this.renderer = new PIXI.Renderer({
        transparent: false,
        antialias: true,
        backgroundColor: 0x060606,
      });
      
      
      let canvas = document.getElementById('pixi-ahrs');
      canvas.appendChild(this.renderer.view);
      
      this.renderer.view.style.display = "block";
      this.renderer.resize(window.innerWidth, window.innerHeight);


      // PIXI Container
      this.stage = new PIXI.Container()
      // Move container to the center
      this.stage.x = this.renderer.width / 2;
      this.stage.y = this.renderer.height / 2;
      // Center container drawings in local container coordinates
      this.stage.pivot.x = this.stage.width / 2;
      this.stage.pivot.y = this.stage.height / 2;
      // Add the stage to the rebderer
      //this.renderer.addChild(this.stage);

      this.gLadder = new PIXI.Graphics();
      this.gLadderDraw();
      this.stage.addChild(this.gLadder);

      this.gLabels = new PIXI.Graphics();
      this.gLabelsDraw();
      this.stage.addChild(this.gLabels);

      this.renderer.render(this.stage);
    },

    setPitch(degs) {
      this.pitch = degs;
      this.gLadder.y = this.pitch * 5.0;
    },

    setRoll(degs) {
      this.roll = degs;
      this.gLadder.rotation = this.roll * Math.PI / 360.0;
    },

    connectWebsocket() {
      this.ahrsSocket = new WebSocket(URL_GPS_WS);

      this.ahrsSocket.onopen = () => {
        this.ahrsStatus = "connected";
        
        this.ahrsSocket.onmessage = ({data}) => {
          this.parseAhrsData(data);
        };

        this.ahrsSocket.onerror = (e) => {
          console.log('error occurred!' + e);
          this.ahrsData = { 'error': 'SOCKET-ERROR: ' + e};             
        };
      };
    },

    disconnectWebsocket() {
      this.ahrsSocket.close();
      this.ahrsStatus = "disconnected";
    },

    parseAhrsData(data) {
      
      let jsonData = (JSON.parse(data));
      this.ahrsData = jsonData;

      this.setPitch(this.ahrsData["AHRSPitch"]);
      this.setRoll(this.ahrsData["AHRSRoll"]);
      this.redraw();
          
    },

    redraw() {
      this.renderer.render(this.stage);
    }
    
  }
};
</script>
