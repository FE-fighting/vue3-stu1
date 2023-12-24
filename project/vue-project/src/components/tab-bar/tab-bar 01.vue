<template>
  <div class="tab-bar">
    <div class="tab-bar-item" @click="itemClick('/home')">
        <img src="@/assets/img/首页.png" alt="">
        <span class="text"> 首页</span></div>
    <div class="tab-bar-item">
        <img src="@/assets/img/收藏.png" alt=""><span class="text"> 收藏</span></div>
    <div class="tab-bar-item">
        <img src="@/assets/img/购物.png" alt=""><span class="text"> 订单</span></div>
    <div class="tab-bar-item">
        <img src="@/assets/img/更多.png" alt=""><span class="text"> 消息</span></div>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
</script>
<style lang="less" scoped>
.tab-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #aaa;
}
.tab-bar-item{
    flex-direction: column;
    flex: 1;
    display:flex;
    justify-content:center;
    align-items: center;
}
.text{
    font-size: 12px;
    margin-top: 2px;
}
.img{
    height: 32px;
    width: auto;
}
</style>