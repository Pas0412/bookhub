<template>
  <div class="container">
    <div class="header">
      <img
        class="detail-logo"
        src="../assets/book-active.svg"
        @click="returnToHome"
      />
      Book Detail
      <router-link class="login" tag="span" to="/login" v-if="!isLogin"
        ><text>Log in</text></router-link
      >
      <router-link class="login" tag="span" to="/user" v-else
        ><text>{{ this.username }}</text></router-link
      >
    </div>
    <div class="product-container">
      <img :src="product.img_s" :alt="product.name" />
      <div class="context">
        <h1>{{ product.title }}</h1>
        <p>{{ product.category }}</p>
        <p>Author: {{ product.author }}</p>
        <p>Price: {{ product.price }}</p>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value} points"
          :colors="colors"
          style="margin-bottom: 10px"
          v-show="value"
        />
        <el-button @click="addToCart" type="warning">Add to Cart</el-button>
      </div>
      <img
        v-show="this.isLogin"
        :src="like ? '/src/assets/heart-filled.png' : '/src/assets/heart.png'"
        class="favorite"
        @click="handleLike"
      />
    </div>
    <div class="title-recommend">Recommendations based on this book</div>
    <Books :books="booklist"></Books>
  </div>
</template>

<script>
import Books from "../components/Books.vue";
import { userStore } from "../store/user";
import router from "../router";
import {
  getAllBooks,
  getBookDetail,
  getRecommendByBook,
} from "../service/book";
import { isfavorite, setfavoriteList } from "../service/favorite";
import { addCart } from "../service/cart";
import Heart from "/src/assets/heart.png";
import HeartFilled from "/src/assets/heart-filled.png";

export default {
  props: {},
  data() {
    return {
      product: {},
      isLogin: false,
      booklist: [],
      value: 3.7,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      like: 0,
    };
  },
  mounted() {
    const user = userStore();
    this.isLogin = user.isLoggedIn;
    if (this.isLogin) this.username = user.user.username;
    //books
    this.fetchRecommendByBook(localStorage.getItem("detail"));
    this.fetchBookDetail();
    if (this.isLogin)
      this.fetchIsFavorite(
        JSON.parse(localStorage.getItem("user")).id,
        localStorage.getItem("detail")
      );
  },
  methods: {
    returnToHome() {
      router.push("/home");
    },
    addToCart() {
      if (this.isLogin) {
        alert("Your product has been added to cart");
        this.useAddCart();
      } else {
        this.$router.push("/login");
      }
    },
    async useAddCart() {
      await addCart({
        user_id: JSON.parse(localStorage.getItem("user")).id,
        book_id: localStorage.getItem("detail"),
      });
    },
    async fetchAllBooks() {
      try {
        const response = await getAllBooks();
        this.booklist = response;
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
    async fetchBookDetail() {
      try {
        const vid = localStorage.getItem("detail");
        this.id = vid;
        const response = await getBookDetail({ id: this.id });
        this.product = response;
        this.value = response.rate;
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
    async fetchIsFavorite(user, book) {
      try {
        const response = await isfavorite({ user_id: user, book_id: book });
        this.like = response;
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
    async setfavorite(user, book, like) {
      try {
        await setfavoriteList({ user_id: user, book_id: book, like: like });
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
    async fetchRecommendByBook(book) {
      try {
        const response = await getRecommendByBook({ book_id: book });
        this.booklist = response;
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
    handleLike() {
      const heart = document.querySelector(".favorite");
      this.like ? (this.like = 0) : (this.like = 1);
      this.like ? (heart.src = Heart) : (heart.src = HeartFilled);
      const userID = JSON.parse(localStorage.getItem("user"));
      this.setfavorite(userID.id, localStorage.getItem("detail"), this.like);
    },
  },
  components: { Books },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
/* CSS styles specific to the component */
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px 0px;
  background-color: @primary;
  color: #fff;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.detail-logo {
  margin: 10px 10px 10px 50px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.login {
  color: #fff;
  line-height: 36px;
  margin-right: 20px;
  border: #fff solid 2px;
  border-radius: 30px;
  padding: 0 10px;
  margin-top: 5px;
  align-self: center;
  box-sizing: border-box;
  font-size: 15px;
  transition: 0.3s;
}

.login:hover {
  letter-spacing: 1px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* 添加阴影 */
  cursor: pointer;
}

.product-container {
  width: 80%;
  height: 400px;
  margin: 70px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
}
.product-container img {
  width: 220px;
  height: 300px;
}
.context {
  display: flex;
  flex-direction: column;
}
.context p {
  margin: 10px 0;
}
.favorite {
  width: 30px !important;
  height: 30px !important;
  cursor: pointer;
  margin-top: 10px;
}
.title-recommend {
  font-size: 30px;
  font-weight: bold;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin: 0 0 50px 170px;
}
</style>
