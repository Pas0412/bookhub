<template>
  <div>
    <header class="home-header wrap" :class="{ active: this.headerScroll }">
      <img class="logo" src="../assets/book.svg" />
      <div class="header-search">
        <span class="app-name">BookHub</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./home"
          >Search</router-link
        >
      </div>
      <router-link class="login" tag="span" to="#" v-if="!isLogin"
        >Login</router-link
      >
      <router-link class="login" tag="span" to="#" v-else>
        <van-icon name="manager-o" />
      </router-link>
    </header>
    <swiper :list="swiperList"></swiper>
  </div>
  <recommand title="Recent Searched" :books="bookList"></recommand>
  <recommand title="Best selling" :books="bookList"></recommand>
  <book-tab :books="bookList" :categories="categories"></book-tab>
  <div style="height: 500px"></div>
</template>

<script>
// import { useRouter } from "vue-router";
import swiper from "@/components/Swiper.vue";
// const router = useRouter();
import Recommand from "../components/Recommond.vue";
import BookTab from "../components/BookTab.vue";
import picture from "/src/assets/1.jpeg";
import picture2 from "/src/assets/2.jpeg";
import picture3 from "/src/assets/3.jpeg";
import logoIcon from "/src/assets/book.svg";
import logoIconActive from "/src/assets/book-active.svg"
export default {
  components: {
    Recommand,
    BookTab
},
  data() {
    return {
      categories: [
        { id: 1, name: "计算机科学"},
        { id: 2, name: "其他"}
      ],
      swiperList: [
        { id: 1, imageUrl: picture, url: "#" },
        { id: 2, imageUrl: picture2, url: "#" },
        { id: 3, imageUrl: picture3, url: "#" },
      ], // Carousel list
      isLogin: false,
      headerScroll: false, // 滚动透明判断
      hots: [],
      newGoodses: [],
      recommends: [],
      loading: true,
      bookList: [
  {
    id: 1,
    name: 'JavaScript高级程序设计',
    author: 'Nicholas C. Zakas',
    category: '计算机科学',
    price: '89.00',
    image: picture
  },
  {
    id: 2,
    name: '图解HTTP',
    author: '上野宣',
    category: '计算机科学',
    price: '49.00',
    image: picture
  },
  {
    id: 3,
    name: '算法（第4版）',
    author: 'Robert Sedgewick / Kevin Wayne',
    category: '计算机科学',
    price: '98.00',
    image: picture
  },
  {
    id: 4,
    name: '计算机组成与设计 硬件/软件接口',
    author: 'David A. Patterson / John L. Hennessy',
    category: '计算机科学',
    price: '99.00',
    image: picture
  },
  {
    id: 5,
    name: '代码整洁之道',
    author: 'Robert C. Martin',
    category: '计算机科学',
    price: '59.00',
    image: picture
  },
  {
    id: 6,
    name: '代码整洁之道',
    author: 'Robert C. Martin',
    category: '计算机科学',
    price: '59.00',
    image: picture
  },
  {
    id: 7,
    name: '代码整洁之道',
    author: 'Robert C. Martin',
    category: '计算机科学',
    price: '59.00',
    image: picture
  },
  {
    id: 8,
    name: '代码整洁之道',
    author: 'Robert C. Martin',
    category: '计算机科学',
    price: '59.00',
    image: picture
  },
  {
    id: 9,
    name: '代码整洁之道',
    author: 'Robert C. Martin',
    category: '计算机科学',
    price: '59.00',
    image: picture
  },
  {
    id: 10,
    name: '代码整洁之道',
    author: 'Robert C. Martin',
    category: '其他',
    price: '59.00',
    image: picture
  }
]

    };
  },
  mounted() {
    document.body.addEventListener("scroll", () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 100 ? (this.headerScroll = true) : (this.headerScroll = false);
      const logo = document.querySelector(".logo");
      this.headerScroll
        ? (logo.src = logoIconActive)
        : (logo.src = logoIcon);
    });
    // const token = getLocal('token')
    // if (token) {
    //   state.isLogin = true
    //   // get cart data.
    //   cart.updateCart()
    // }
    // showLoadingToast({
    //   message: "Loading...",
    //   forbidClick: true,
    // });
    // const { data } = await getHome()
    // state.swiperList = data.carousels
    // state.newGoodses = data.newGoodses
    // state.hots = data.hotGoodses
    // state.recommends = data.recommendGoodses
    // loading = false;
    // closeToast();
  },
};

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
      margin-right: 20px;
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
    margin-right: 20px;
    .van-icon-manager-o {
      font-size: 20px;
      vertical-align: -3px;
    }
  }
}

</style>
