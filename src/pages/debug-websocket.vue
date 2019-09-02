<template>
  <f7-page name="debug-websocket">
      <f7-navbar title="Debug Websocket" back-link="Back"></f7-navbar>

      <f7-list>
        <f7-list-input
          label="URL"
          type="text"
          :value="url"
          @input="url = $event.target.value"
          placeholder="wss url"
          clear-button
          info="test with wss://echo.websocket.org"
        ></f7-list-input>

        <f7-list-item>
          <f7-button @click="disconnectWebsocket" v-if="socketStatus == 'connected'">Disconnect</f7-button>
          <f7-button @click="connectWebsocket" v-if="socketStatus === 'disconnected'">Connect</f7-button>
        </f7-list-item>

        <f7-list-item>
          {{socketStatus}}
        </f7-list-item>

        <f7-list-input
          label="Message"
          type="text"
          :value="message"
          @input="message = $event.target.value"
          placeholder="Message"
          clear-button
        ></f7-list-input>

        <f7-list-item>
          <f7-button @click="sendWebsocketMessage">Send</f7-button>
        </f7-list-item>

      </f7-list>

      <f7-block v-if="socketStatus === 'connected'">
        {{socketData}}
      </f7-block>

  </f7-page>
</template>

<script>


export default {
  name: "DebugWebsocket",
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
