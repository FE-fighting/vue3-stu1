<!--  -->
<template>
  
    <div class="add"> 
    <button @click="btnClick(1)">+1</button>
    <button  @click="btnClick(5)">+5</button>
    <button  @click="btnClick(10)">+10</button>
    </div>

</template>

<script>
//
export default {
  data () {
    return {
    };
  },
  //emits的数组写法，
  //用对象写法可以进行验证
  //严重用函数
  emits:["add"],

  components: {},

  computed () {},

  mounted () {},

  methods: {
    btnClick(count){
      this.$emit("add",count)
      //$emit第一个参数是名称，第二个参数是值
    }
  }
}

</script>
<style lang='scss' scoped>
</style>