<template>
  <f7-page tabbar-fixed>

    <f7-navbar :title="$f7.data.pageTitle">
      <f7-nav-right>
        <f7-link icon-ios="f7:settings" icon-aurora="f7:settings" icon-md="material:settings" href="/settings/"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-toolbar tabbar labels bottom class="toolbar-bottom-md">
      <f7-link tab-link href="/" data-route-tab-id="tab-dashboard" icon-ios="f7:home_fill" icon-aurora="f7:home_fill" icon-md="material:view_agenda" text="STATUS"></f7-link>
      <f7-link tab-link href="/panel-a/" data-route-tab-id="tab-panel-a"  icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="PANEL A"></f7-link>
      <f7-link tab-link href="/panel-b/" data-route-tab-id="tab-panel-b"  icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="PANEL B"></f7-link>
      <f7-link tab-link href="/panel-c/" data-route-tab-id="tab-panel-c"  icon-ios="f7:tabs_fill" icon-aurora="f7:tabs_fill" icon-md="material:view_agenda" text="PANEL C"></f7-link>
      <f7-link tab-link href="" popover-open=".tabbar-more" data-route-tab-id="tab-more" 
        icon-ios="f7:more_vertical_fill" icon-aurora="f7:more_vertical_fill" icon-md="material:more_vert" 
        text="more"
        _class=" {tab-link-active : activateMoreTab} "
        _click="onClickMore"
        _ref="tabbarmore"
      ></f7-link>
      
      <f7-popover class="tabbar-more">
        <f7-list>
          <f7-list-item tab-link link="/traffic/" title="Traffic" class="popover-close"></f7-list-item>
          <f7-list-item tab-link link="/radar/" title="Radar" class="popover-close"></f7-list-item>
          <f7-list-item tab-link link="/ahrs/" title="AHRS" class="popover-close"></f7-list-item>
          <f7-list-item tab-link link="/gmeter/" title="G-Meter" class="popover-close"></f7-list-item>
          <f7-list-item tab-link link="/gps/" title="GPS" class="popover-close"></f7-list-item>
          <f7-list-item tab-link link="/map/" title="Map" class="popover-close"></f7-list-item>
          <f7-list-item link="/datalog/" title="Data & Logs" class="popover-close"></f7-list-item>
  	      <f7-list-item link="/debug/" title="Debug" class="popover-close"></f7-list-item>
        </f7-list>
      </f7-popover>

    </f7-toolbar>

    <f7-tabs routable>
      <f7-tab id="tab-dashboard"></f7-tab>
      <f7-tab id="tab-panel-a"></f7-tab>
      <f7-tab id="tab-panel-b"></f7-tab>
      <f7-tab id="tab-panel-c"></f7-tab>
      <f7-tab id="tab-more"></f7-tab>
      <f7-tab id="tab-traffic"></f7-tab>
      <f7-tab id="tab-radar"></f7-tab>
      <f7-tab id="tab-ahrs"></f7-tab>
      <f7-tab id="tab-gmeter"></f7-tab>
      <f7-tab id="tab-gps"></f7-tab>
      <f7-tab id="tab-map"></f7-tab>
    </f7-tabs>

  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      //activateMoreTab: false,
    }
  },
  methods: {
    onClickMore() {
      //console.log("jo")
      // this.activateMoreTab = true;
      // app.toolbar.setHighlight(tabbarEl)
    }
  }
}
</script>



