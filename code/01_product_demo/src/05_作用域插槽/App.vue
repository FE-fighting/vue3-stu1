<!--  -->
<template>
  <div class="app">
    <tab-control :names="['衣服','裤子','鞋子']" 
    @tab-item-click="tabItemClick"></tab-control>
    <h1>{{  products[currenIndex]}}</h1>
    <template>
      <tab-control :names="['衣服','裤子','鞋子']" 
    @tab-item-click="tabItemClick">
    <!--作用域插槽写法 v-slot:default="props",再用props去调用props.要调用的名称，props调用所有的属性-->
    
    
    </tab-control>
    </template>
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