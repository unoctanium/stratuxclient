<template>
<f7-app :params="f7params" color-theme="light-blue" _theme-dark>
  <!-- Status bar overlay for fullscreen mode-->
  <f7-statusbar></f7-statusbar>
  <!-- Main view -->
  <f7-view url="/" :main="true" class="safe-areas"></f7-view>

 <!-- Popup -->
  <!--
  <f7-popup id="my-popup">
    <f7-view>
      <f7-page>
        <f7-navbar title="Popup">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>Popup content goes here.</p>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>
  -->


</f7-app>
</template>

<script>
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';

    export default {
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          id: 'io.unoctanium.stratuxme', // App bundle ID
          name: 'StratuxMe', // App name
          theme: 'ios', // Automatic theme detection
          // App root data
          data: function () {
            return {
              pageTitle: "STRATUXme",
            };
          },

          // App routes
          routes: routes,

          // Input settings
          input: {
            scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
            scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            overlay: this.$device.cordova && this.$device.ios || 'auto',
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },

      }
    },
    methods: {
      //alertLoginData() {
        //this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password);
      //}
    },
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (f7.device.cordova) {
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    }
  }
</script>

<style>
.list
.item-content
{
  min-height: 49px;
}
</style>