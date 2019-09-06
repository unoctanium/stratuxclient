import { freemem } from "os";
import Framework7 from "framework7";

export default {
  namespaced: true,
  state: {
    socket: null,
    connected: null,
    Version: null,
    Build: null,
    Devices: null,
    Ping_connected: null,
    Connected_Users: null,
    UAT_messages_last_minute: null,
    UAT_messages_max:  null,
    ES_messages_last_minute:  null,
    ES_messages_max:  null,
    FLARM_messages_last_minute:  null,
    FLARM_messages_max:  null,
    FLARM_connected:  null,
    GPS_satellites_locked:  null,
    GPS_satellites_tracked:  null,
    GPS_satellites_seen:  null,
    GPS_solution:  null,
    GPS_position_accuracy: null,
    GPS_hardware: null,
    GPS_protocol: null,
    DiskSpace: null,
    UAT_METAR_total: null,
    UAT_TAF_total: null,
    UAT_NEXRAD_total: null,
    UAT_SIGMET_total: null,
    UAT_PIREP_total: null,
    UAT_NOTAM_total: null,
    UAT_OTHER_total: null,
    UAT_Towers: null,
    Uptime: null,
    CPUTemp: null,
    CPUTempMin: null,
    CPUTempMax: null,
    visible_uat: true,
    visible_es: true,
    visible_flarm: true,
    visible_gps: true,
    visible_ping: true,
    visible_errors: null,
    Errors: null,
    DeveloperMode: null,
    
  },
  getters: {
    //socket: state => `${state.firstname} ${state.lastname}`
    socket: state => state.socket,
    connected: state => state.connected,
    Version: state => state.Version,
    Build: state => state.Build,
    Devices: state => state.Devices,
    Ping_connected: state => state.Ping_connected,
    Connected_Users: state => state.Connected_Users,
    UAT_messages_last_minute: state => state.UAT_messages_last_minute,
    UAT_messages_max: state => state.UAT_messages_max,
    ES_messages_last_minute: state => state.ES_messages_last_minute,
    ES_messages_max: state => state.ES_messages_max,
    FLARM_messages_last_minute: state => state.FLARM_messages_last_minute,
    FLARM_messages_max: state => state.FLARM_messages_max,
    FLARM_connected: state => state.FLARM_connected,
    GPS_satellites_locked: state => state.GPS_satellites_locked,
    GPS_satellites_tracked: state => state.GPS_satellites_tracked,
    GPS_satellites_seen: state => state.GPS_satellites_seen,
    GPS_solution: state => state.GPS_solution,
    GPS_position_accuracy: state => state.GPS_position_accuracy,
    GPS_hardware: state => state.GPS_hardware,
    GPS_protocol: state => state.GPS_protocol,
    DiskSpace: state => state.DiskSpace,
    UAT_METAR_total: state => state.UAT_METAR_total,
    UAT_TAF_total: state => state.UAT_TAF_total,
    UAT_NEXRAD_total: state => state.UAT_NEXRAD_total,
    UAT_SIGMET_total: state => state.UAT_SIGMET_total,
    UAT_PIREP_total: state => state.UAT_PIREP_total,
    UAT_NOTAM_total: state => state.UAT_NOTAM_total,
    UAT_OTHER_total: state => state.UAT_OTHER_total,
    UAT_Towers: state => state.UAT_Towers,
    Uptime: state => state.Uptime,
    CPUTemp: state => state.CPUTemp,
    CPUTempMin: state => state.CPUTempMin,
    CPUTempMax: state => state.CPUTempMax,
    visible_uat: state => state.visible_uat,
    visible_es: state => state.visible_es,
    visible_flarm: state => state.visible_flarm,
    visible_gps: state => state.visible_gps,
    visible_ping: state => state.visible_ping,
    visible_errors: state => state.visible_errors,
    Errors: state => state.Errors,
    DeveloperMode: state => state.DeveloperMode,
 
  },
  mutations: {
    'socket'(state, payload) { state.socket = payload },
    'connected'(state, payload) { state.connected = payload },
    'Version'(state, payload) { state.Version = payload },
    'Build'(state, payload) { state.Build = payload },
    'Devices'(state, payload) { state.Devices = payload },
    'Ping_connected'(state, payload) { state.Ping_connected = payload },
    'Connected_Users'(state, payload) { state.Connected_Users = payload },
    'UAT_messages_last_minute'(state, payload) { state.UAT_messages_last_minute = payload },
    'UAT_messages_max'(state, payload) { state.UAT_messages_max = payload },
    'ES_messages_last_minute'(state, payload) { state.ES_messages_last_minute = payload },
    'ES_messages_max'(state, payload) { state.ES_messages_max = payload },
    'FLARM_messages_last_minute'(state, payload) { state.FLARM_messages_last_minute = payload },
    'FLARM_messages_max'(state, payload) { state.FLARM_messages_max = payload },
    'FLARM_connected'(state, payload) { state.FLARM_connected = payload },
    'GPS_satellites_locked'(state, payload) { state.GPS_satellites_locked = payload },
    'GPS_satellites_tracked'(state, payload) { state.GPS_satellites_tracked = payload },
    'GPS_satellites_seen'(state, payload) { state.GPS_satellites_seen = payload },
    'GPS_solution'(state, payload) { state.GPS_solution = payload },
    'GPS_position_accuracy'(state, payload) { state.GPS_position_accuracy = payload },
    'GPS_hardware'(state, payload) { state.GPS_hardware = payload },
    'GPS_protocol'(state, payload) { state.GPS_protocol = payload },
    'DiskSpace'(state, payload) { state.DiskSpace = payload },
    'UAT_METAR_total'(state, payload) { state.UAT_METAR_total = payload },
    'UAT_TAF_total'(state, payload) { state.UAT_TAF_total = payload },
    'UAT_NEXRAD_total'(state, payload) { state.UAT_NEXRAD_total = payload },
    'UAT_SIGMET_total'(state, payload) { state.UAT_SIGMET_total = payload },
    'UAT_PIREP_total'(state, payload) { state.UAT_PIREP_total = payload },
    'UAT_NOTAM_total'(state, payload) { state.UAT_NOTAM_total = payload },
    'UAT_OTHER_total'(state, payload) { state.UAT_OTHER_total = payload },
    'UAT_Towers'(state, payload) { state.UAT_Towers = payload },
    'Uptime'(state, payload) { state.Uptime = payload },
    'CPUTemp'(state, payload) { state.CPUTemp = payload },
    'CPUTempMin'(state, payload) { state.CPUTempMin = payload },
    'CPUTempMax'(state, payload) { state.CPUTempMax = payload },
    'visible_uat'(state, payload) { state.visible_uat = payload },
    'visible_es'(state, payload) { state.visible_es = payload },
    'visible_flarm'(state, payload) { state.visible_flarm = payload },
    'visible_gps'(state, payload) { state.visible_gps = payload },
    'visible_ping'(state, payload) { state.visible_ping = payload },
    'visible_errors'(state, payload) { state.visible_errors = payload },
    'Errors'(state, payload) { state.Errors = payload },
    
  },

  actions: {
    startController({commit, getters}) {

      function connect (status_url) {
        var socket = null

        if(!getters['socket']) {
          socket = new WebSocket(status_url)
          commit('socket', socket)
        }

        commit('connected', "Disconnected")

        socket.onopen = function (msg) {
          commit('connected', "Connected")
        };
    
        socket.onclose = function (msg) {
          commit('connected', "Connected")
          commit('socket', null)
          setTimeout(function() {connect(status_url);}, 1000);
        };
    
        socket.onerror = function (msg) {
          commit('connected', "Error")
        };

        socket.onmessage = function (msg) {
          //console.log('Received status update.')
    
          var status = JSON.parse(msg.data)
          
          // Update Status
          commit('Version', status.Version)
          commit('Build', status.Build.substr(0, 10))
          commit('Devices', status.Devices)
          commit('Ping_connected', status.Ping_connected)
          commit('Connected_Users', status.Connected_Users)
          commit('UAT_messages_last_minute', status.UAT_messages_last_minute)
          commit('UAT_messages_max', status.UAT_messages_max)
          commit('ES_messages_last_minute', status.ES_messages_last_minute)
          commit('ES_messages_max', status.ES_messages_max)
          commit('FLARM_messages_last_minute', status.FLARM_messages_last_minute)
          commit('FLARM_messages_max', status.FLARM_messages_max)
          commit('FLARM_connected', status.FLARM_connected)
          commit('GPS_satellites_locked', status.GPS_satellites_locked)
          commit('GPS_satellites_tracked', status.GPS_satellites_tracked)
          commit('GPS_satellites_seen', status.GPS_satellites_seen)
          commit('GPS_solution', status.GPS_solution)

          switch(status.GPS_solution) {
            case "Disconnected":
            case "No Fix":
            case "Unknown":
              commit('GPS_position_accuracy', "")
              break;
            default:
              commit('GPS_position_accuracy', ", " + status.GPS_position_accuracy.toFixed(1) + " m")
          }
          var gpsHardwareCode = (status.GPS_detected_type & 0x0f);
          var tempGpsHardwareString = "Not installed";
          switch(gpsHardwareCode) {
            case 1:
              tempGpsHardwareString = "Serial port";
              break;
            case 2:
              tempGpsHardwareString = "Prolific USB-serial bridge";
              break;
            case 6:
              tempGpsHardwareString = "USB u-blox 6 GPS receiver";
              break;
            case 7:
              tempGpsHardwareString = "USB u-blox 7 GNSS receiver";
              break;
            case 8:
              tempGpsHardwareString = "USB u-blox 8 GNSS receiver";
              break;
            case 9:
              tempGpsHardwareString = "USB u-blox 9 GNSS receiver";
              break;
            default:
              tempGpsHardwareString = "Not installed";
          }
          commit('GPS_hardware', tempGpsHardwareString)

          var gpsProtocol = (status.GPS_detected_type >> 4);
          var tempGpsProtocolString = "Not communicating";
          switch(gpsProtocol) {
            case 1:
              tempGpsProtocolString = "NMEA protocol";
              break;
            case 3:
              tempGpsProtocolString = "NMEA-UBX protocol";
              break;
            default:
              tempGpsProtocolString = "Not communicating";
          }
          commit('GPS_protocol', tempGpsProtocolString)
    
          var MiBFree = status.DiskBytesFree/1048576;
          commit('DiskSpace', MiBFree.toFixed(1))
    
          commit('UAT_METAR_total', status.UAT_METAR_total)
          commit('UAT_TAF_total', status.UAT_TAF_total)
          commit('UAT_NEXRAD_total', status.UAT_NEXRAD_total)
          commit('UAT_SIGMET_total', status.UAT_SIGMET_total)
          commit('UAT_PIREP_total', status.UAT_PIREP_total)
          commit('UAT_NOTAM_total', status.UAT_NOTAM_total)
          commit('UAT_OTHER_total', status.UAT_OTHER_total)
          
          // Errors array.
          if (status.Errors.length > 0) {
            commit('visible_errors', true)
            commit('Errors', status.Errors)
          }
    
          if(status.Uptime != undefined) {
            var uptime = status.Uptime;
            var up_d = parseInt((uptime/1000) / 86400),
                up_h = parseInt((uptime/1000 - 86400*up_d) / 3600),
                up_m = parseInt((uptime/1000 - 86400*up_d - 3600*up_h) / 60),
                up_s = parseInt((uptime/1000 - 86400*up_d - 3600*up_h - 60*up_m));
            var tmpUptime = String(up_d + "/" + ((up_h < 10) ? "0" + up_h : up_h) + ":" + ((up_m < 10) ? "0" + up_m : up_m) + ":" + ((up_s < 10) ? "0" + up_s : up_s));
            commit('Uptime', tmpUptime)
          
          } 
          var boardtemp = status.CPUTemp;
          if (boardtemp != undefined) {
            commit('CPUTemp', status.CPUTemp)
            commit('CPUTempMin', status.CPUTempMax)
            commit('CPUTempMin', status.CPUTempMax)
          }
    
        }
      } // END connect()


      function setHardwareVisibility(url_settings_get) {
    
        Framework7.request.get(url_settings_get, function (data) {
          settings = JSON.parse(data) //angular.fromJson(data)
          commit('DeveloperMode', settings.DeveloperMode)
          commit('visible_uat', settings.UAT_Enabled)
          commit('visible_es', settings.ES_Enabled)
          commit('visible_flarm', settings.FLARM_Enabled)
          commit('visible_gps', settings.GPS_Enabled)
          commit('visible_ping', settings.Ping_Enabled)
          if (settings.Ping_Enabled) {
            commit('visible_uat', settings.UAT_Enabled)
            commit('visible_es', settings.ES_Enabled)
          }
        })

      } // END setHardwareVisibility

      function getTowers(url_towers_get) {
        Framework7.request.get(url_towers_get, function (data) {
          var towers = JSON.parse(data) //angular.fromJson(data);
          var cnt = 0;
          for (var key in towers) {
            if (towers[key].Messages_last_minute > 0) {
              cnt++;
            }
          }
          commit('UAT_Towers', cnt)
        })
      } // END getTowers

      // periodically get the tower list
	    var updateTowers = setInterval(function () {
		    // refresh tower count once each 5 seconds (aka polling)
		    getTowers("http://192.168.1.1/getTowers");
	    }, (5 * 1000), 0, false);
      // TODO: ODO: Cancel the timer on exit with .. $interval.cancel(updateTowers);

      setHardwareVisibility("http://192.168.1.1/getSettings")
      connect("ws://192.168.1.1/status") //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      
    } // END startController

  } // END acions
}; 