<template>
    <div class="product">
        <h2>商品标签</h2>
        <p>商品描述</p>
        <div>价格：{{ price }}</div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            price:9.0,
        }
    }
}

</script>
<style scoped>

</style>