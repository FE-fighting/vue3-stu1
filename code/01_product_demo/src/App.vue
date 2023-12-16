<template>
    <h2>{{title}}</h2>
    <h2>当前激计数{{count}}</h2>
    <button @click="add">+</button>
    <button @click="lose">-</button>
    <product-item></product-item>
</template>
<script>

    export default {//export导出
    data() {
        return {
            title:"标题",
            count:0,
        }
    },
    methods:{
        add(){
            this.count++

        },
        lose(){
            this.count--
        }

    },
    components:{

    }
    //scoped解决style作用域问题
}
</script>
<style scoped>
h2{
    color: red;
}
</style>
