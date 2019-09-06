<template>
  <f7-page name="panel-a">
    <f7-list>
      <f7-list-item :link="item.link" :key=index v-for="(item, index) in items" :title="item.title">
        <span class="badge" :class="'color-' + item.status" slot="media"></span>
      </f7-list-item>
    </f7-list>
    {{Uptime}}
  </f7-page>

</template>

<script>
export default {
  data() {
    return {
      parameters: null,
      items: null,
      timer: null,
      sound: null
    }
  },
  
  mounted() {
    //this.sound = new Audio("http://s1download-universal-soundbank.com/mp3/sounds/1023.mp3")

    this.updateStatus()
    this.updateDisplay()

    // update display every 1 sec
    this.startInterval()
  },
  beforeDestroy() {
    // destroy timer when we leave
    clearInterval(this.timer)
  },
  computed: {
    connected: function() { return (this.$store.getters['connected'] )},
    status: function() { return (this.$store.getters['status'] )},
    settings: function() { return (this.$store.getters['settings'] )},

    Uptime: function() { return (this.$store.getters['stratux/Uptime'] )}


  },
  methods: {  

    startInterval () {
      this.timer = setInterval(function(){
        this.updateStatus()
        this.updateDisplay()
      }.bind(this), 1000);
    },

    initStatus() {
      this.parameters = {
        wifi:         { link: "/datalog/getSettings/", title: "Wifi Network: ", status: 0, value: "unknown" },
        data:         { title: "Data connection", status: 0   } ,
        data1090ES:   { title: "1090 MHz ES Data: ", status: 0, value: "- / -" },
        data987UAT:   { title: "987 MHz UAT Data: ", status: 0, value: "- / -" },
        data868FLARM: { title: "868 MHz FLARM Data: ", status: 0, value: "- / -" },
        towersUAT:    { title: "UAT Towers: ", status: "0", value: "-" },
        gps:          { title: "GPS Data", status: 0 },
        ahrs:         { title: "AHRS Data: ", status: 0, value: "-" },
        pitotstatic:  { title: "Pitot/Static: ", status: 0, value: "-" },
        ems:          { title: "EMS", status: 0},
        firmware:     { title: "Firmware: ", status: 0, value: "-" },
        boardTemp:    { title: "CPU Temperature: ", status: 0, value: "(°C) - > - < -"},
        boardStorage: { title: "Available Storage: ", status: 0, value1: "-" },
        boardUptime:  { title: "System Uptime: ", status: 0, value: "-"},
      }
    },

    updateStatus() {
      //this.playSound()

      this.initStatus()

      this.$store.dispatch("getStatus")

      // wifi
      if (!this.connected) {
        this.parameters.wifi.status = 1
        return
      }
      this.parameters.wifi.status = 3
      
      // data connection
      if (this.status) {
        this.parameters.data.status = 1
        // ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
        //this.parameters.wifi.value = this.status.
        //return
      }
      this.parameters.data.status = 3

      // data1090ES
      this.parameters.data1090ES.status = 0
      this.parameters.data1090ES.value = "-"

      // data987UAT
      this.parameters.data987UAT.status = 0
      this.parameters.data987UAT.value = "-"

      // data868FLARM
      this.parameters.data868FLARM.status = 0
      this.parameters.data868FLARM.value = "-"

      // towersUAT
      this.parameters.towersUAT.status = 0
      this.parameters.towersUAT.value = "-"

      // gps
      this.parameters.gps.status = 0

      // ahrs
      this.parameters.ahrs.status = 2
      this.parameters.ahrs.value = "no mag"
      

      // pitotstatic
      if(this.status.BMPConnected && this.status.pitotConnected) {
        this.parameters.pitotstatic.status = 3
        this.parameters.pitotstatic.value = "both" 
      }
      else if(this.status.BMPConnected) {
        this.parameters.pitotstatic.status = 2
        this.parameters.pitotstatic.value = "no pitot" 
      }
      else if(this.status.pitotConnected) {
        this.parameters.pitotstatic.status = 2
        this.parameters.pitotstatic.value = "no BMP" 
      }

      // ems
      if (this.status.emsConnected) {
        this.parameters.ems.status = 3
      }

      // firmware
      if(this.status.Version) {
        this.parameters.firmware.status = 3
        this.parameters.firmware.value = this.status.Version
      }

      // boardTemp
      if(this.status.CPUTemp != undefined)  {
        let temp = this.status.CPUTemp || 0
        let tempMin = this.status.CPUTempMin || temp
        let tempMax = this.status.CPUTempMax || temp
        // let tempFstring = ((temp * 9.0 / 5.0) + 32.0).toFixed(0) + "°F"
        if( temp < 60) { this.parameters.boardTemp.status = 3 }
        if( temp >= 60 && temp < 80) { this.parameters.boardTemp.status = 2 }
        if( temp >=  80) { this.parameters.boardTemp.status = 3 }
        this.parameters.boardTemp.value = "(°C) " + tempMin.toFixed(0) + " > " + temp.toFixed(0) + " < " + tempMax.toFixed(0)  
      }
    
      // boardStorage
      if (this.status.DiskBytesFree != undefined) {
        let mb = this.status.DiskBytesFree / 1000000
        this.parameters.boardStorage.status = 3
        this.parameters.boardStorage.value = mb.toFixed(0) + " MB"
      }

      // boardUptime
      if (this.status.Uptime != undefined)
			{
        var uptime = this.status.Uptime;
				var up_d = parseInt((uptime/1000) / 86400),
				    up_h = parseInt((uptime/1000 - 86400*up_d) / 3600),
				    up_m = parseInt((uptime/1000 - 86400*up_d - 3600*up_h) / 60),
				    up_s = parseInt((uptime/1000 - 86400*up_d - 3600*up_h - 60*up_m));
				this.parameters.boardUptime.value = String(up_d + "/" + ((up_h < 10) ? "0" + up_h : up_h) + ":" + ((up_m < 10) ? "0" + up_m : up_m) + ":" + ((up_s < 10) ? "0" + up_s : up_s));
        this.parameters.boardUptime.status = 3
      }

    },

    updateDisplay() {

      function getStatusColor(status) {
        switch (status) {
          case 1:
            return ("red")
            break
          case 2:
            return ("yellow")
            break
          case 3: 
            return ("blue")
            break
          default:
            return ("gray")
            break
        }
      }

      this.items = []
      for (const item of Object.values(this.parameters)) {
        this.items.push({
          title: item.title + (item.value? item.value : ""),
          status: getStatusColor(item.status),
          link: item.link
        })
      }
    },

    playSound() {
      var promise = this.sound.play()
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
        });
      }
    },

  }

}
</script>