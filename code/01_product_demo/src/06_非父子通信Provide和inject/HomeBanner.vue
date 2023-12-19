<!--  -->
<template>
  <div class="homebanner">
    <h1>homebanner:哈哈哈哈{{ name}}{{  age}}{{  message}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  inject:["name","age","message"],

  components: {},

  computed () {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>