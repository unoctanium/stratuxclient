<template>
  <f7-page tabbar-fixed>

    <f7-navbar>
      <f7-nav-left>
        <f7-link popover-open=".popover-datalogs" icon-ios="f7:bolt_round" icon-aurora="f7:bolt_round" icon-md="material:offline_bolt"></f7-link>
      </f7-nav-left>
      <f7-nav-title>{{$f7.data.pageTitle}}</f7-nav-title>
      <f7-nav-right>
        <f7-link href="/settings/" icon-ios="f7:settings" icon-aurora="f7:settings" icon-md="material:settings"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-toolbar tabbar labels bottom class="toolbar-bottom-md">
      <f7-link tab-link href="/" data-route-tab-id="tab-panel-a" icon-ios="f7:check_fill" icon-aurora="f7:check_fill" icon-md="material:done" text="Status"></f7-link>
      <f7-link tab-link href="/panel-b/" data-route-tab-id="tab-panel-b"  icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="Panel B"></f7-link>
      <f7-link tab-link href="/panel-c/" data-route-tab-id="tab-panel-c"  icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="Panel C"></f7-link>
      <f7-link tab-link href="/panel-d/" data-route-tab-id="tab-panel-d"  icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="Panel D"></f7-link>
      <f7-link tab-link href="/tabbar-more/" data-route-tab-id="tab-more"  icon-ios="f7:more_vertical_fill" icon-aurora="f7:more_vertical_fill" icon-md="material:more_vert" text="More"></f7-link>
      
      <f7-popover class="popover-datalogs">
        <f7-list>
          <f7-list-item group-title title="Get Stratux Data" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/getSettings/" title="Settings" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/getStatus/" title="Status" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/getSatellites/" title="Satellites" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/getTowers/" title="Towers" class="popover-close"></f7-list-item>
          
          <f7-list-item group-title title="Stratux Live Data" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/status/" title="Live Status" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/situation/" title="Situation" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/radar/" title="Radar" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/weather/" title="Weather" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/developer/" title="Developer Data" class="popover-close"></f7-list-item>

          <f7-list-item group-title title="Stratux Actions" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/shutdown/" title="Shut down" class="popover-close"></f7-list-item>

          <f7-list-item group-title title="Debug" class="popover-close"></f7-list-item>
          <f7-list-item link="/debug/websocket/" title="Websocket" class="popover-close"></f7-list-item>
          <f7-list-item link="/debug/axios/" title="Axios" class="popover-close"></f7-list-item>
        </f7-list>
      </f7-popover>

    </f7-toolbar>

    <f7-tabs routable>
      <f7-tab id="tab-panel-a"></f7-tab>
      <f7-tab id="tab-panel-b"></f7-tab>
      <f7-tab id="tab-panel-c"></f7-tab>
      <f7-tab id="tab-panel-d"></f7-tab>
      <f7-tab id="tab-more"></f7-tab>
    </f7-tabs>

  </f7-page>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$f7.data.pageTitle = "STRATUXme"
  },
  methods: {
  }
}
</script>



