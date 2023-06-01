<template>
  <div>
    <div>
      <header class="home-header wrap" :class="{ active: this.headerScroll }">
        <img class="logo" src="../assets/book.svg" />
        <div class="header-search">
          <span class="app-name">BookHub</span>
          <i class="iconfont icon-search"></i>
          <router-link tag="span" class="search-title" to="./search"
            >Search</router-link
          >
        </div>
        <router-link class="login" tag="span" to="/login" v-if="!isLogin"
          ><text>Log in</text></router-link
        >
        <router-link class="login" tag="span" to="/user" v-else
          ><text>{{ this.username }}</text></router-link
        >
      </header>
      <swiper :list="swiperList"></swiper>
    </div>
    <recommand title="Recent Searched" :books="bookList"></recommand>
    <recommand title="Best selling" :books="bookList"></recommand>
    <book-tab :books="bookList" :categories="categories"></book-tab>
    <backto-top class="back-top" :isVisible="this.isVisible"></backto-top>
  </div>
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
import logoIconActive from "/src/assets/book-active.svg";
import BacktoTop from "../components/BacktoTop.vue";
import { userStore } from "../store/user"; 
import { getAllCategories } from "../service/categories";
export default {
  components: {
    Recommand,
    BookTab,
    BacktoTop,
  },
  data() {
    return {
      username: '', 
      isVisible: false,
      categories: [
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
          name: "JavaScript高级程序设计",
          author: "Nicholas C. Zakas",
          category: "计算机科学",
          price: "89.00",
          image: picture,
        },
        {
          id: 2,
          name: "图解HTTP",
          author: "上野宣",
          category: "计算机科学",
          price: "49.00",
          image: picture,
        },
        {
          id: 3,
          name: "算法（第4版）",
          author: "Robert Sedgewick / Kevin Wayne",
          category: "计算机科学",
          price: "98.00",
          image: picture,
        },
        {
          id: 4,
          name: "计算机组成与设计 硬件/软件接口",
          author: "David A. Patterson / John L. Hennessy",
          category: "计算机科学",
          price: "99.00",
          image: picture,
        },
        {
          id: 5,
          name: "代码整洁之道",
          author: "Robert C. Martin",
          category: "计算机科学",
          price: "59.00",
          image: picture,
        },
        {
          id: 6,
          name: "代码整洁之道",
          author: "Robert C. Martin",
          category: "计算机科学",
          price: "59.00",
          image: picture,
        },
        {
          id: 7,
          name: "代码整洁之道",
          author: "Robert C. Martin",
          category: "计算机科学",
          price: "59.00",
          image: picture,
        },
        {
          id: 8,
          name: "代码整洁之道",
          author: "Robert C. Martin",
          category: "计算机科学",
          price: "59.00",
          image: picture,
        },
        {
          id: 9,
          name: "代码整洁之道",
          author: "Robert C. Martin",
          category: "计算机科学",
          price: "59.00",
          image: picture,
        },
        {
          id: 10,
          name: "代码整洁之道",
          author: "Robert C. Martin",
          category: "其他",
          price: "59.00",
          image: picture,
        },
      ],
    };
  },
  mounted() {
    //user
    const user = userStore();
    this.isLogin = user.isLoggedIn;
    if(this.isLogin) this.username = user.user.username;
    //category
    this.fetchCategories();
    //scoll event
    document.body.addEventListener("scroll", () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 100
        ? (this.headerScroll = true)
        : (this.headerScroll = false);
      scrollTop > 300 ? (this.isVisible = true) : (this.isVisible = false);
      const logo = document.querySelector(".logo");
      this.headerScroll ? (logo.src = logoIconActive) : (logo.src = logoIcon);
    });
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await getAllCategories();
        this.categories = response;
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
  }
};
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

  .login {
  color: @primary;
  line-height: 36px;
  margin-right: 20px;
  border: @primary solid 2px;
  border-radius: 30px;
  padding: 0 10px;
  margin-top: 5px;
  // justify-content: center;
  // align-items: ;
  align-self: center;
  box-sizing: border-box;
  // position: relative;
  // transform: translateY(5px);
  transition: 0.3s;
}

.login:hover {
  letter-spacing: 1px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* 添加阴影 */
  cursor: pointer;
}
  &.active {
    background: @primary;

    .login {
      color: #fff;
      margin-right: 20px;
      border-color: #fff;
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
}


.login text {
  font-weight: bold;
  font-size: 20px;
}
van-icon {
  font-size: 20px;
  vertical-align: -3px;
}
.back-top {
  display: flex;
}

</style>
