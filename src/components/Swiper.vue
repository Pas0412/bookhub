<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
      <van-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.imageUrl" alt="" >
      </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    goTo(url) {
      window.open(url)
    }
  }
}
</script>

<style lang='less' scoped>
.my-swipe {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
