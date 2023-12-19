<!--  -->
<template>
  <div class="app">
<show-message title="哈哈哈">
    <button>我是按钮元素</button>
    <!--在父组件中写,会自动替换子组件的slot的位置，插入slot的地方，可以在插槽中有默认值，当你没有使用插槽时会出现默认值-->
</show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
  data () {
    return {
    };
  },

  components: {
    ShowMessage
  },

  computed () {},

  mounted () {},

  methods: {}
}

</script>
<style  scoped>
</style>