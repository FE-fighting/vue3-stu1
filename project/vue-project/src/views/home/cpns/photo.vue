<template>
  <div class="photo">

    <van-swipe :autoplay="3000" lazy-render class="swipe">
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script >
export default {
  setup() {
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    return { images };
  },
};

</script>
<style lang="less" scoped>
img{
  height: 140px;
    width: 100%;
}
.swipe{
    width:100%;
}
</style>