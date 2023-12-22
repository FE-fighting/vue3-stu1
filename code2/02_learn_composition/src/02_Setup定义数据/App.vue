<template>
    <div class="app">
        <h2>message{{ message }}</h2>
        <button @click="changeClick">修改message</button>
        <h2>{{ accout.uesrname }},{{ accout.password}}</h2>
        <button @click="changePassword">修改账号</button>
    </div>
</template>

<script>
import { reactive,ref } from 'vue'
    export default {
       setup(){
        let message="Hello word"
        //定义普通的数据：可以正常的被使用
        //缺点不是响应式，不会被代理
        function changeClick(){
            message="您好"}
            //定义响应式数据
            //reactive,定义复杂类型的数据
            const accout=reactive({
                uesrname:"appp",
                password:"888888"
            })
            function changePassword(){
                accout.password="kobe"
            }
            //ref函数：定义简单的函数，也可以定义复杂类型的函数
        
return{
message,
changeClick,
accout,
changePassword
}
       }    }
</script>

<style lang="" scoped>
    
</style>