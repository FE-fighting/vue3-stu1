<!--  -->
<template>
  <div>
    <product age="18" height="1.88" name="why"></product>
    <product age="20"></product>
  </div>
  <!--如果当前的属性是一个props的attribute，那么该属性会默认添加到子组件的根元素上-->
</template>

<script>
import Product from './Product.vue';

export default {
  data () {
    return {
    };
  },

  components: {Product},

  computed () {},

  mounted () {},

  methods: {},

}

</script>
<style  scoped>
/**scoped是解决样式的作用域问题，scoped是为了实现组件的私有化，表示style只属于当前模块，不对全局造成污染。 */
</style>