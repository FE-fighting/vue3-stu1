<!--  -->
<template>
  <div class="app">
    <!--template中ref对象会自动解包-->
    <h2>计数器：{{ count }}</h2>
    <button @click="add">+1</button>
    <button @click="lose">-1</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup(){
//定义count
//默认定义的数据都不是响应式数据
let count=ref(100)
const add = () => {
  count.value++

}
const lose = () => {
    count.value--
}
return{
  count,
  add,
  lose
}
  }
}

</script>
<style lang='scss' scoped>
</style>