<template>
  <f7-page name="stratux-data">
    <f7-navbar title="DDDDDDD" back-link="Back"></f7-navbar>

{{ data }}

  </f7-page>
</template>

<script>
export default {
  name: "StratuxTowers",
  props: {
    context: Object,
  },
  data() {
    return {
      data: this.context
    };
  },
  mounted() {
    console.log("MOUNTED!!!!!")
  }
}
</script>