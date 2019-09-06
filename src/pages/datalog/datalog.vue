<template>
  <f7-page name="STRATUX raw data" ptr @ptr:refresh="load">
    <f7-navbar :title="title" back-link="Back"></f7-navbar>

    <f7-block>
      {{response}}
    </f7-block>

  </f7-page>
</template>

<script>

import stratux from "@/js/stratux"
import axios from "axios"

export default {

  data() {
    return {
      title: "",
      endpoint: null,
      api: undefined,
      response: "",
      socket: null,
      
    }
  },
  mounted() {
    this.endpoint = this.$f7route.params.endpoint
    this.api = stratux.api[this.endpoint] // undefined: api error    
    this.load()
  },
  beforeDestroy() {
    if (this.socket) {
      this.closeWebsocket()
    }
  },
  methods: {

    load() {
      if (this.api == undefined) {
        this.$f7.dialog.alert('STRATUX Protocol error! This command is not available. Maybe you need to update?');
        return
      }

      this.title = this.api.name

      switch (this.api.method) {
      case "GET":
        this.getAxiosData()
        break;
      case "POST":
        if(this.endpoint == "shutdown") {
          this.$f7.dialog.alert("Shutting down. Please remove battery immediately after pressing OK");
          this.postAxiosData("") //{message: this.axiosMessage}
        }
        break;
      case "SOCK":
        this.connectWebsocket()
        break;
      }
    },

    getAxiosData() {
      axios({ method: "GET", "url": this.api.url }).then(result => {
        this.response = result.data;
        console.log(result)
      }, error => {
        this.$f7.dialog.alert(error,"http GET Error");
        console.error(error);
      });
    },
    postAxiosData(data) {
      axios({ method: "POST", "url": this.api.url, "data": data, "headers": { "content-type": "application/json" } }).then(result => {
        this.response = result.data;
      }, error => {
        this.$f7.dialog.alert(error,"http POST Error");
        console.error(error);
      });
    },

    connectWebsocket() {
      const self = this
      self.$f7.preloader.show()
      this.socket = new WebSocket(this.api.url);
      this.socket.onopen = () => {
        //this.socketStatus = "connected";
        this.socket.onmessage = ({data}) => {
          self.$f7.preloader.hide()
          this.response = data;
        };

        this.socket.onerror = (error) => {
          self.$f7.preloader.hide()
          self.$f7.dialog.alert(error,"Websocket Error");
          //console.log('error occurred!' + error);
        };
      };

      this.socket.onclose = (event) => {
        if (event.code == 1005) {
          //console.log('ws closed');        
        } 
        else {
          this.$f7.dialog.alert("Can't open Websocket: " + this.api.url, "Websocket Error");
          //console.log('error occurred!');
          //console.log(event);
        }
      }  
    },

    closeWebsocket() {
      this.socket.close();
      //this.socketStatus = "disconnected";
    },


/**
 * inits a websocket by a given url, returned promise resolves with initialized websocket, rejects after failure/timeout.
 *
 * @param url the websocket url to init
 * @param existingWebsocket if passed and this passed websocket is already open, this existingWebsocket is resolved, no additional websocket is opened
 * @param timeoutMs the timeout in milliseconds for opening the websocket
 * @param numberOfRetries the number of times initializing the socket should be retried, if not specified or 0, no retries are made
 *        and a failure/timeout causes rejection of the returned promise
 * @return {Promise}
 */
/*function initWebsocket(url, existingWebsocket, timeoutMs, numberOfRetries) {
    timeoutMs = timeoutMs ? timeoutMs : 1500;
    numberOfRetries = numberOfRetries ? numberOfRetries : 0;
    var hasReturned = false;
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if(!hasReturned) {
                console.info('opening websocket timed out: ' + url);
                rejectInternal();
            }
        }, timeoutMs);
        if (!existingWebsocket || existingWebsocket.readyState != existingWebsocket.OPEN) {
            if (existingWebsocket) {
                existingWebsocket.close();
            }
            var websocket = new WebSocket(url);
            websocket.onopen = function () {
                if(hasReturned) {
                    websocket.close();
                } else {
                    console.info('websocket to opened! url: ' + url);
                    resolve(websocket);
                }
            };
            websocket.onclose = function () {
                console.info('websocket closed! url: ' + url);
                rejectInternal();
            };
            websocket.onerror = function () {
                console.info('websocket error! url: ' + url);
                rejectInternal();
            };
        } else {
            resolve(existingWebsocket);
        }

        function rejectInternal() {
            if(numberOfRetries <= 0) {
                reject();
            } else if(!hasReturned) {
                hasReturned = true;
                console.info('retrying connection to websocket! url: ' + url + ', remaining retries: ' + (numberOfRetries-1));
                initWebsocket(url, null, timeoutMs, numberOfRetries-1).then(resolve, reject);
            }
        }
    });
    promise.then(function () {hasReturned = true;}, function () {hasReturned = true;});
    return promise;
};*/
// call: 
/*
initWebsocket('ws:\\localhost:8090', null, 5000, 10).then(function(socket){
    console.log('socket initialized!');
    //do something with socket...

    //if you want to use the socket later again and assure that it is still open:
    initWebsocket('ws:\\localhost:8090', socket, 5000, 10).then(function(socket){
        //if socket is still open, you are using the same "socket" object here
        //if socket was closed, you are using a new opened "socket" object
    }

}, function(){
    console.log('init of socket failed!');
});
*/





  } 
}
</script>