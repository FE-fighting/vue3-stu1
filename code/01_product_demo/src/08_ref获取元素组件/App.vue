<!--  -->
<template>
  <div class="app">
    <h2 ref="title" class="title" :style="{color:titleColor}">{{ message}}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
        message:"Hello word",
        titleColor:"red"

    };
  },

  components: {},

  computed () {},

  mounted () {},

  methods: {
    changeTitle(){
        //不要主动获取DOM，并且去改变DOM内容
        //this.message="您好，李银河"
       /// this.titleColor="blue"
    //通过ref获取元素is
    console.log(this.$refs.title)
//也可以通过这种方式拿到组件实例
//父组件可以调用子组件方法
//通过$el可以拿到子组件中的元素
    }
  }
}

</script>
<style  scoped>
</style>