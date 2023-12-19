<!--  -->
<template>
  <div class="app">
    <div class="tabs" >
      <home></home>
    </div>
  </div>
  <component is="home"></component>
<!--动态组件，component,必须是注册过的组件is组件，全局注册的组件，和局部注册组件-->
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Category from './views/Category.vue'
export default {
  data () {
    return {
        tabs:["home","about","category"],
        currenIndex:0
    };
  },

  components: {
    Home,
    About,
    Category,

  },

  computed () {},

  mounted () {},

  methods: {
    itemClick(index){
        this.currenIndex=index

    }
  }
}

</script>
<style  scoped>
.active{
    color: red;
}
</style>