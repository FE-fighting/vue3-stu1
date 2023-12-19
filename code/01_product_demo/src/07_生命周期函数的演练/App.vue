<!--  -->
<template>
  <div></div>
</template>

<script>
export default {

  beforeCreate() {
    //组件被创建之前
    console.log("  beforeCreate")
  },
  created() {
    //组件被创建完成
    console.log("组件被创建完成")
    console.log("1发送网络请求，请求数据")
    console.log("2监听eventBus事件")
    console.log("3监听watch数据")
  },
  //3.组件的template准备被挂载
  beforeMount() {
    console.log("beforeMount")
    
  },
  //4组件template被挂载，虚拟DOM->真实DOM
  mounted() {
    console.log("mounted")
    console.log("获取DOM")
    console.log("使用DOM")
  },
  //数据发生改变
  //准备更新Dom
  beforeUpdate() {
    console.log("beforeUpdate")
    
  },
  //更新DOM
  updated() {
    console.log("update")
  },
  //卸载VNode->DOM元素nm
  //卸载之前
  beforeUnmount() {
    console.log("beforeMount")
  },
  //卸载完成
  Unmounted(){
    console.log(" Unmounted")
  }
}

</script>
<style lang='scss' scoped>
</style>