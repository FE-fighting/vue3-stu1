<template>
<div class="search-box">
   <div class="location">
    <div class="city" @click="cityClick">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/定位.png" alt="">
    </div>
  </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

//位置/城市
const router=useRouter()
const cityClick=()=>{
  router.push("/city")
}
const positionClick=()=>{
  navigator.geolocation.getCurrentPosition(res=>{
//获取位置的API
console.log("获取位置成功",res)
  },err=>{
console.log("获取位置失败",err)
  })
}

</script>
<style lang="less" scoped>
.location{
  display: flex;
  align-content: center;
  padding: 0 30px;
}
.city{
  flex: 1;
  font-size: 14px;
  top: 5px;
  position: relative;
  color: #333;
}
.position{
  width:74px;
  display: flex;
 align-items: center;
  
}
.text{
  position: relative;
  font-size: 12px;
  top: 5px;
  color: #666;
}
img{
    height: 15px;
    width:15px;
    margin-left:5px ;
    top: 5px;
  position: relative;
  }
</style>