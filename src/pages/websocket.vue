<template>
  <f7-page name="websocket">
    <f7-navbar title="Websocket"></f7-navbar>

      <f7-block>  
      <f7-input
        label="URL"
        type="text"
        :value="url"
        @input="url = $event.target.value"
        placeholder="wss url"
        clear-button
      ></f7-input>
      </f7-block>  
      
      <f7-block>  
        <f7-button @click="disconnectWebsocket" v-if="socketStatus == 'connected'">Disconnect</f7-button>
        <f7-button @click="connectWebsocket" v-if="socketStatus === 'disconnected'">Connect</f7-button>
      </f7-block>

      <f7-block>
          {{socketStatus}}
      </f7-block>

      <f7-block>  
        <f7-input
          label="Message"
          type="text"
          :value="message"
          @input="message = $event.target.value"
          placeholder="Message"
          clear-button
        ></f7-input>
        <f7-button @click="sendWebsocketMessage">Send</f7-button>
      </f7-block>  

      <f7-block v-if="socketStatus === 'connected'">      
        {{socketData}}
      </f7-block>

  </f7-page>
</template>

<script>


export default {
  name: "Websocket",
  data() {
    return {
      url: "wss://echo.websocket.org",
      message: "",

      socket: null,
      socketStatus: "disconnected",
      socketData: "",
    };
  },
  methods: {

    connectWebsocket() {
      this.socket = new WebSocket(this.url);

      this.socket.onopen = () => {
        this.socketStatus = "connected";
        
        this.socket.onmessage = ({data}) => {
          this.parseWebsocketData(data);
        };

        this.socket.onerror = (e) => {
          console.log('error occurred!' + e);
          this.message = "SOCKET-ERROR: " + e;             
        };

      };
    },

    disconnectWebsocket() {
      this.socket.close();
      this.socketStatus = "disconnected";
    },

    sendWebsocketMessage(e) {
      this.socket.send(this.message);
      this.message = "";
    },

    parseWebsocketData(data) {
      //let jsonData = (JSON.parse(data));
      //this.socketData = jsonData;
      this.socketData = data;
    },
    
  }
};
</script>
