<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
        <slot name="left">left</slot>
    </div>
    <div class="center"><slot name="center">center</slot></div>
    <div class="right"><slot name="right">right</slot></div>
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

  methods: {}
}

</script>
<style  scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
.left{
    width: 80px;
    background-color: red;
}
.center{
    flex: 1;
    background-color: aquamarine;
}
.right{
    width:80px;
    background-color: bisque;
}
</style>