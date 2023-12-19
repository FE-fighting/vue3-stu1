<!--  -->
<template>
  <div class="app">
    <h1>当前计数：{{count}}</h1>
   
   <!--自定义add-count,并且监听内部的add事件-->
      <add-count @add="addBtnClick"></add-count>
      <lose-count @lose="loseBtnClick"></lose-count>

    </div>
</template>

<script>
import AddCount from './AddCount.vue'
import LoseCount from './LoseCount.vue'
export default {
  data () {
    return {
      count:0
    };
  },

  components: {
    AddCount,
    LoseCount
  },

  computed () {},

  mounted () {},

  methods: {
    addBtnClick(count){
      this.count += count
    },
    loseBtnClick(count){
      this.count -= count

    }
  }
}

</script>
<style  scoped>
</style>