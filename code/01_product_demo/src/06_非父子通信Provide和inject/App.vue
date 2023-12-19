<!--  -->
<template>
  <div class="app">
    
<home></home>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  data () {
    return {
      message:"hello message"
    };
  },

  components: {
    Home
  },
  //非父子组件传，provide传值，接收组件用inject[]接收值，inject用数组接收值
  provide(){
    //provide一般是用函数
    return{name:"why",
age:18,
message:this.message
}

  },

  computed () {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>