<!--  -->
<template>
  <div class="info">
    <h2>你的姓名 ：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>身高：{{height}}</h2>
    <!--通过$attrs，可以拿到，非props属性-->

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

  methods: {},
 // props:["name","age","height"]
  //props数组写法
  //弊端不能对类型进行验证
  //props接收父组件传过来的数据，并且没有默认值
  //props对象语法
  //最好使用对象语法，可以限制类型，也可以验证类型，可以设置默认值
  //数组也是对象当为对象类型时，必须写成函数形式，函数必须返回默认值的对象，
props:{
    name:{
        type:String,
        default:"我是默认值"
    },
    age:{
        type:Number,
        required:true,//require默认值是flase,设为true,就是该属性是必传
    default:18,
    },height:{
type:Number,
default:1.88,
    }

}
}

</script>
<style  scoped>
</style>