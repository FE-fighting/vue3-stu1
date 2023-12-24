<template>
  <div class="tab-bar">
    <template v-for="(item,index) in tabbarData">
        <div class="tab-bar-item" @click="itemClick(index,item)" :class="{active: currenIndex===index}">
        <img v-if="currenIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img  v-else :src="getAssetURL(item. imageActive)" alt="">
        <span class="text"> {{ item.text }}</span></div>
    </template>
    
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import{getAssetURL} from '@/utils/get_asstes_img.js'
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const currenIndex=ref(0)
const router=useRouter()
const itemClick=(index,item)=>{

    currenIndex.value=index
    router.push(item.path)


}
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
&.active{
    color:var( --primay-color);
    /****css引入变量 */
}
</style>