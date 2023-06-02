<template>
  <div class="container">
    <div class="header">
      <img class="detail-logo" src="../assets/book-active.svg" @click="returnToHome" />
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
        <el-button @click="addToCart" type="warning">Add to Cart</el-button>
      </div>
    </div>
    <Books :books="booklist"></Books>
  </div>
</template>

<script>
import Books from "../components/Books.vue";
import { userStore } from "../store/user";
import router from "../router";
import { getAllBooks, getBookDetail } from "../service/book";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: {},
      isLogin: false,
      booklist: [],
    };
  },
  mounted() {
    const user = userStore();
    this.isLogin = user.isLoggedIn;
    if (this.isLogin) this.username = user.user.username;
    //books
    this.fetchAllBooks();
    this.fetchBookDetail();
  },
  methods: {
    returnToHome() {
      router.push("/home");
    },
    addToCart() {
      alert("Your product has been");
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
        console.log(this.id);
        const response = await getBookDetail({ id: this.id });
        console.log(response)
        this.product = response;
      } catch (error) {
        console.error(error);
        // 处理错误
      }
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
  height: 500px;
  margin: 70px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.product-container img {
  width: 220px;
  height: 300px;
}

.context p {
  margin: 30px 0;
}
</style>
