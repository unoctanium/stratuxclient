<template>
  <f7-page name="debug-axios">
      <f7-navbar title="Debug Axios" back-link="Back"></f7-navbar>

      <f7-list>  
        <f7-list-input
          label="URL"
          type="text"
          :value="axiosUrl"
          @input="axiosUrl = $event.target.value"
          placeholder="axios url"
          clear-button
          info="test GET: https://httpbin.org/ip, POST: ../post"            
        ></f7-list-input>
        <f7-list-input
          label="Data"
          type="text"
          :value="axiosMessage"
          @input="axiosMessage = $event.target.value"
          placeholder="Message"
          clear-button
        ></f7-list-input>
        <f7-list-item>
          <f7-button @click="getAxiosData">GET</f7-button>
        </f7-list-item>
        <f7-list-item>
          <f7-button @click="postAxiosData">POST</f7-button>
        </f7-list-item>
      </f7-list>  

      <f7-block>
        {{axiosResponseIp}}
      </f7-block>

      <f7-block>
        {{axiosResponse}}
      </f7-block>

  </f7-page>
</template>

<script>
import axios from "axios";

export default {
    name: 'DebugAxios',
    data () {
        return {
            axiosUrl: "",
            axiosMessage: "",
            axiosResponse: "",
            axiosResponseIp: "",
        }
    },

    methods: {
        getAxiosData() {
          axios({ method: "GET", "url": this.axiosUrl }).then(result => {
              this.axiosResponseIp = result.data.origin;
              this.axiosResponse = result.data;
          }, error => {
              console.error(error);
          });
        },
        postAxiosData() {
          axios({ method: "POST", "url": this.axiosUrl, "data": {message: this.axiosMessage}, "headers": { "content-type": "application/json" } }).then(result => {
              this.axiosResponseIp = result.data.origin;
              this.axiosResponse = result.data;
          }, error => {
              console.error(error);
          });
        }
    }
};

</script>
