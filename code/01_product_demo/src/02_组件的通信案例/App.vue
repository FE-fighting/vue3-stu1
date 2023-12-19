<!--  -->
<template>
  <div class="app">
    <tab-control :names="['衣服','裤子','鞋子']" 
    @tab-item-click="tabItemClick"></tab-control>
    <h1>{{  products[currenIndex]}}</h1>
  </div>
</template>

<script>
import TabControl from './TabControl.vue'
export default {
  data () {
    return {
        products:["衣服列表","鞋子列表","裤子列表"],
        currenIndex:0
    };
  },

  components: {
    TabControl
    
  },

  computed () {},

  mounted () {},

  methods: {
    tabItemClick(index)
  {
    this.currenIndex=index;

  }

  }
}

</script>
<style  scoped>
</style>