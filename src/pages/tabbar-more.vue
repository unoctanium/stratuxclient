<template>
  <f7-page name="tabbar-more">

    <f7-list>
      <f7-list-item link="/traffic/hello" title="Traffic"></f7-list-item>
      <f7-list-item link="/radar/" title="Radar"></f7-list-item>
      <f7-list-item link="/ahrs/" title="AHRS"></f7-list-item>
      <f7-list-item link="/gmeter/" title="G-Meter"></f7-list-item>
      <f7-list-item link="/gps/" title="GPS"></f7-list-item>
      <f7-list-item link="/map/" title="Map"></f7-list-item>
      <f7-list-item link="/towers/" title="Towers"></f7-list-item>
      <f7-list-item link="/weather/" title="Weather"></f7-list-item>
    </f7-list>
    
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  /*
  mounted() {
    this.$f7.data.pageTitle = "More"
  },
  */
  methods: {  
  }
}
</script>

