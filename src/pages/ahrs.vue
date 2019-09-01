<template>
  <f7-page name="ahrs">
    <f7-navbar title="AHRS"></f7-navbar>
    <f7-block-title>This is AHRS</f7-block-title>
    <f7-block>
      <!--<div id="pixi-ahrs" tabindex="0" @keydown.up="onKeyUp" @keydown.down="onKeyDown" @keydown.left="onKeyLeft" @keydown.right="onKeyRight"></div>-->
      <div id="pixi-ahrs"></div>
    </f7-block>
  </f7-page>
</template>

<script>
import * as PIXI from "pixi.js";

export default {
  name: "Ahrs",
  data() {
    return {
      app: null,
      colors: ["75F4F4", "90E0F3", "B8B3E9", "D999B9"],
      pitch: 0,
      roll: 0,
      heading: 0,
      slipSkid: 0,
      altitude: 0,
      messages: [],
      container: null,
      gLadder: null,
      gLabels: null,
      pkeys: [],
    };
  },
  created() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('resize', this.onWindowResize);
  },
  mounted() {

    this.$nextTick(function() {
      window.addEventListener('resize', this.onWindowResize);
      //Init
      this.onWindowResize()
    })

    this.app = new PIXI.Application({
      transparent: false,
      antialias: true,
      backgroundColor: 0x060606,
    });
    
    let canvas = document.getElementById('pixi-ahrs');
    canvas.appendChild(this.app.view);
    
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    this.initGraphics();

    // Listen for animate update
    this.app.ticker.add((delta) => {
      this.gameLoop(delta);
    });

  },
  methods: {

    onKeyDown(e) {
      var code = e.keyCode ? e.keyCode : e.which;
      this.pkeys[code]=true;
    },
    
    onKeyUp(e) {
      var code = e.keyCode ? e.keyCode : e.which;
      this.pkeys[code]=false;
    },
    
    onWindowResize(event) {
      this.app.renderer.resize(window.innerWidth, window.innerHeight);
    },

    gameLoop(delta) {
      
      // INTERIM
      // Keyboard events
      //apply keys
      if (this.pkeys[38]) { //up key
        this.setPitch(1);
      }
      if (this.pkeys[40]) { //down key
        this.setPitch(-1);
      }
      if (this.pkeys[39]) { //right
        this.setRoll(1);
      }
      if (this.pkeys[37]) { //left
        this.setRoll(-1);
      }
    },

    gLadderDraw() {
      const g = this.gLadder;
      const w = this.app.screen.width;
      const h = this.app.screen.height;

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
      const w = this.app.screen.width;
      const h = this.app.screen.height;

      // Arc
      g.lineStyle(2, 0xffffff)
      g.arc(0, 0, w/2, Math.PI, 0);
      
      // Plane
      g.lineStyle(1, 0xffffff)
      g.moveTo(w/4, 0)
      g.lineTo(w/4, 0)
    },

    initGraphics() {
      // PIXI Container
      this.container = new PIXI.Container()
      // Move container to the center
      this.container.x = this.app.screen.width / 2;
      this.container.y = this.app.screen.height / 2;
      // Center container drawings in local container coordinates
      this.container.pivot.x = this.container.width / 2;
      this.container.pivot.y = this.container.height / 2;
      // Add the container to the stage
      this.app.stage.addChild(this.container);

      this.gLadder = new PIXI.Graphics();
      this.gLadderDraw();
      this.container.addChild(this.gLadder);

      this.gLabels = new PIXI.Graphics();
      this.gLabelsDraw();
      this.container.addChild(this.gLabels);
    },

    setPitch(degs) {
      this.pitch += degs;
      this.gLadder.y = this.pitch;
    },

    setRoll(degs) {
      this.roll += degs;
      this.gLadder.rotation = this.roll * 0.01;
    },

    
  }
};
</script>
