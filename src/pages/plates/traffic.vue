<template>
  <f7-page name="traffic">
    <f7-block-title>Traffic</f7-block-title>
{{props["plate"]}}
  </f7-page>
</template>


<script>
export default {
  props: {
    plate: String,
  },
  data() {
    return {
      
    }
  },
  mounted() {

  }
}
</script>