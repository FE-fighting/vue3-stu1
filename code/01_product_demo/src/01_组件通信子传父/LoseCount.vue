<!--  -->
<template>
  
    <div class="lose">
      <button  @click="loseCount(1)">-1</button>
      <button @click="loseCount(5)">-5</button>
      <button @click="loseCount(10)">-10</button>

    </div>

</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed () {},

  mounted () {},

  methods: {
    loseCount(count){
this.$emit("lose",count)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>