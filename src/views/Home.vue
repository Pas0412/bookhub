<template>
  <div>
    <header class="home-header wrap" :class="{ active: state.headerScroll }">
      <img class="logo" src="../assets/book.svg">
      <div class="header-search">
        <span class="app-name">BookHub</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./home"
          >Search</router-link
        >
      </div>
      <router-link class="login" tag="span" to="#" v-if="!state.isLogin"
        >Login</router-link
      >
      <router-link class="login" tag="span" to="#" v-else>
        <van-icon name="manager-o" />
      </router-link>
    </header>
    <swiper :list="state.swiperList"></swiper>
  </div>
  <div style="height: 500px;"></div>
</template>

<script setup>
import { reactive, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import swiper from '@/components/Swiper.vue'
import { showLoadingToast, closeToast, showToast } from "vant";
const router = useRouter();
const state = reactive({
  swiperList: [], // Carousel list
  isLogin: false,
  headerScroll: false, // 滚动透明判断
  hots: [],
  newGoodses: [],
  recommends: [],
  loading: true,
});
onMounted(async () => {
  // const token = getLocal('token')
  // if (token) {
  //   state.isLogin = true
  //   // get cart data.
  //   cart.updateCart()
  // }
  showLoadingToast({
    message: "Loading...",
    forbidClick: true,
  });
  state.swiperList = [
    {id: 1, imageUrl: "./src/static/1.jpeg", url: "#"},
    {id: 2, imageUrl: "./src/static/2.jpeg", url: "#"},
    {id: 3, imageUrl: "./src/static/3.jpeg", url: "#"}
  ]
  // const { data } = await getHome()
  // state.swiperList = data.carousels
  // state.newGoodses = data.newGoodses
  // state.hots = data.hotGoodses
  // state.recommends = data.recommendGoodses
  state.loading = false
  closeToast();
});

nextTick(() => {
  document.body.addEventListener("scroll", () => {
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    scrollTop > 100
      ? (state.headerScroll = true)
      : (state.headerScroll = false);
      const logo = document.querySelector(".logo");
    state.headerScroll? logo.src = "src/assets/book-active.svg" : logo.src = "src/assets/book.svg";
  });
});

// const goToDetail = (item) => {
//   router.push({ path: `/product/${item.goodsId}` })
// }

// const tips = () => {
//   showToast('敬请期待');
// }
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 50px);
  .fj();
  line-height: 50px;
  padding: 0 15px;
  .boxSizing();
  font-size: 15px;
  color: #fff;
  z-index: 10000;
  .logo {
    margin: 10px 10px 10px 50px;
    height: 30px;
    width: 30px;
  }
  &.active {
    background: @primary;
    
    .login {
      color: #fff;
    }
  }

  .header-search {
    display: flex;
    width: 74%;
    line-height: 20px;
    margin: 10px 0px;
    padding: 5px 0;
    color: #232326;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    .app-name {
      padding: 0 10px;
      color: @primary;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #666;
    }
    .icon-search {
      padding: 0 10px;
      font-size: 17px;
    }
    .search-title {
      font-size: 12px;
      color: #666;
      line-height: 21px;
    }
  }
  .icon-iconyonghu {
    color: #fff;
    font-size: 22px;
  }
  .login {
    color: @primary;
    line-height: 52px;
    .van-icon-manager-o {
      font-size: 20px;
      vertical-align: -3px;
    }
  }
}
.good {
  .good-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: @primary;
    font-size: 16px;
    font-weight: 500;
  }
  .good-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .good-item {
      box-sizing: border-box;
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 10px;
      img {
        display: block;
        width: 120px;
        margin: 0 auto;
      }
      .good-desc {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        .title {
          color: #222333;
        }
        .price {
          color: @primary;
        }
      }
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}
.floor-list {
  width: 100%;
  padding-bottom: 50px;
  .floor-head {
    width: 100%;
    height: 40px;
    background: #f6f6f6;
  }
  .floor-content {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    .boxSizing();
    .floor-category {
      width: 50%;
      padding: 10px;
      border-right: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      .boxSizing();
      &:nth-child(2n) {
        border-right: none;
      }
      p {
        font-size: 17px;
        color: #333;
        &:nth-child(2) {
          padding: 5px 0;
          font-size: 13px;
          color: @primary;
        }
      }
      .floor-products {
        .fj();
        width: 100%;
        img {
          .wh(65px, 65px);
        }
      }
    }
  }
}
</style>
