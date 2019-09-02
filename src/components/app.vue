<template>
<f7-app :params="f7params" color-theme="light-blue" theme-dark>
  <!-- Status bar overlay for fullscreen mode-->
  <f7-statusbar></f7-statusbar>

  <!-- Views/Tabs container -->
  <f7-views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <f7-toolbar tabbar labels bottom>
      <f7-link tab-link="#view-status" tab-link-active icon-ios="f7:home_fill" icon-aurora="f7:home_fill" icon-md="material:view_home" text="STATUS"></f7-link>
      <f7-link tab-link="#view-panel-a" icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="PANEL A"></f7-link>
      <f7-link tab-link="#view-panel-b" icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="PANEL B"></f7-link>
      <f7-link tab-link="#view-panel-c" icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="PANEL C"></f7-link>
      <f7-link tab-link="" popover-open=".tabbar-more" icon-ios="f7:more_vertical_fill" icon-aurora="f7:more_vertical_fill" icon-md="material:more_vert" text="more"></f7-link>
      
      <f7-popover class="tabbar-more">
        <f7-list>
          <li><a href="#view-traffic" class="popover-close tab-link item-link item-content"><div class="item-inner">Traffic</div></a></li>
          <li><a href="#view-radar" class="popover-close tab-link item-link item-content"><div class="item-inner">Radar</div></a></li>
          <li><a href="#view-ahrs" class="popover-close tab-link item-link item-content"><div class="item-inner">AHRS</div></a></li>
          <li><a href="#view-gmeter" class="popover-close tab-link item-link item-content"><div class="item-inner">G-Meter</div></a></li>
          <li><a href="#view-gps" class="popover-close tab-link item-link item-content"><div class="item-inner">GPS</div></a></li>
          <li><a href="#view-map" class="popover-close tab-link item-link item-content"><div class="item-inner">Map</div></a></li>
          <li><a href="#view-settings" class="popover-close tab-link item-link item-content"><div class="item-inner">Settings</div></a></li>
          <li><a href="#view-datalog" class="popover-close tab-link item-link item-content"><div class="item-inner">Data &amp; Logs</div></a></li>
          <li><a href="#view-debug" class="popover-close tab-link item-link item-content"><div class="item-inner">Debug</div></a></li>
        </f7-list>
      </f7-popover>

    </f7-toolbar>

    <!-- main view/tab, has "main" and "active" class.-->
    <f7-view id="view-status" main tab tab-active url="/"></f7-view>
    <!-- All other views -->
    <f7-view id="view-panel-a" name="panel-a" tab url="/panel-a/"></f7-view>
    <f7-view id="view-panel-b" name="panel-b" tab url="/panel-b/"></f7-view>
    <f7-view id="view-panel-c" name="panel-c" tab url="/panel-c/"></f7-view>
    <f7-view id="view-traffic" name="traffic" tab url="/traffic/"></f7-view>
    <f7-view id="view-radar" name="radar" tab url="/radar/"></f7-view>
    <f7-view id="view-ahrs" name="ahrs" tab url="/ahrs/"></f7-view>
    <f7-view id="view-gmeter" name="gmeter" tab url="/gmeter/"></f7-view>
    <f7-view id="view-gps" name="gps" tab url="/gps/"></f7-view>
    <f7-view id="view-map" name="map" tab url="/map/"></f7-view>
    <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>
    <f7-view id="view-datalog" name="datalog" tab url="/datalog/"></f7-view>
    <f7-view id="view-debug" name="debug" tab url="/debug/"></f7-view>

  </f7-views>


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
          theme: 'auto', // Automatic theme detection
          // App root data
          data: function () {
            return {
              user: {
                firstName: 'John',
                lastName: 'Doe',
              },
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