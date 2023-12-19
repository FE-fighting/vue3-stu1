<!--  -->
<template>
  <div class="app">
  <nav-bar>
    <template v-slot:left>
        <!--绑定插槽名称用v-slot:后面跟的是名称，给每个插槽取上名字，然后在调用时绑定插槽名字，确定是哪个插槽，没写就会是默认值 v-slot缩写是#-->
<button>返回</button>
    </template>
    <template v-slot:center>
        <span>hhh</span>

    </template>
    <template v-slot:right>
        <button >按我 </button>

    </template>
  </nav-bar>

  </div>
</template>

<script>
//在Vue中有渲染作用域的概念
//父级模板里面的所有内容都在父级作用域中编译的
//子模板里的所有内容都是在子作用域中的编译
import NavBar from './NavBar.vue'
export default {
  data () {
    return {
    };
  },

  components: {
    NavBar
  },

  computed () {},

  mounted () {},

  methods: {}
}

</script>
<style  scoped>
</style>