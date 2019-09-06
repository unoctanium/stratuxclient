//let URL_HOST_BASE           = window.location.hostname + (window.location.port ? ':' + window.location.port : '');
let URL_HOST_BASE           = "192.168.1.1"; // TODO: ODO: We must put this in settings and in the store...

let URL_HOST_PROTOCOL       = "http://" // window.location.protocol + "//";
let URL_WS_PROTOCOL         = "ws://";

var stratux = 
{
  api: {
    "cageAHRS":           { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/cageAHRS", name: "" },
    "calAHRS":            { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/calibrateAHRS", name: "" },
    "orientAHRS":         { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/orientAHRS", name: "" },
    "deleteahrslogfiles": { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/deleteahrslogfiles", name: "" },
    "deletelogfile":      { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/deletelogfile", name:"" },
    "develmodetoggle":    { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/develmodetoggle", name: "Devmode Toggle" },
    "downloadahrslogs":   { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/downloadahrslogs", name: "" },
    "downloaddb":         { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/downloaddb", name: "" },
    "downloadlog":        { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/downloadlog", name: "" },
    "resetGMeter":        { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/resetGMeter", name: "" },
    "reboot":             { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/reboot", name: "" },
    "restart":            { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/restart", name: "" },
    "getSatellites":      { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getSatellites", name:" Satellites" },
    "getSettings":        { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getSettings", name: "Settings" },
    "setSettings":        { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/setSettings", name: "" },
    "shutdown":           { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/shutdown", name: "" },
    "getStatus":          { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getStatus", name: "Status" },
    "getTowers":          { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getTowers", name: "Towers" },
    "updateUpload":       { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/updateUpload", name: "" },
    "developer":          { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/developer", name: "Developer" },
    "situation":          { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/situation", name: "Situations" },
    "status":             { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/status", name: "Status" },
    "weather":            { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/weather", name: "Weather" },
    "radar":              { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/radar", name: "Radar" },
  },


  getStatus() {
    return {
      data: 0,
      Version: "jo",
      CPUTemp: 40.3,
      "DiskBytesFree": 60625375232,
    }
  },

  getSettings() {
    return {
      data: 0,
    }
  },

  getTowers() {
    return {
      data: 0,
    }
  },

  getTraffic() {
    return {
      data: 0,
    }
  },


  astartController() {

    var timer

    function startInterval () {
      timer = setInterval(function(){
        update()
      }, 1000);
    }

    function update() {
      console.log("jo")
    }

    startInterval()


  },



  








}

export default stratux


/*
status
towers // UAT
weather // UAT
traffic // ADS-B + FLARM + GPS
gps/ahrs // GPS
radar // GPS + 
flarmstatus // GPS + FLARM
logs
settings
developer

*/

/* 
status
--
panel a
penel b
panel c
--

towers /UAT
weather / UAT
traffic (list)
radar (trafficradar)
ahrs (gps)
g-meter (gps)
map (gps)
gps (detail status and satellites)
flarm (detail status)
settings
datalog
developer
*/