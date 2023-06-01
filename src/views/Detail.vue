<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="../assets/book-active.svg" @click="returnToHome"/>
      Book Detail
      <router-link class="login" tag="span" to="/login" v-if="!isLogin"
        ><text>Log in</text></router-link
      >
      <router-link class="login" tag="span" to="/user" v-else
        ><text>{{ this.username }}</text></router-link
      >
    </div>
    <div class="product-container">
      <img :src="product.image" :alt="product.name" />
      <div class="context">
        <h1>{{ product.name }}</h1>
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
import picture from "/src/assets/1.jpeg";
import { userStore } from "../store/user";
import router from "../router";
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            product: {
                id: 1,
                name: "JavaScript高级程序设计",
                author: "Nicholas C. Zakas",
                category: "计算机科学",
                price: "89.00",
                image: picture,
            },
            isLogin: false,
            booklist : [
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
    ]
        };
    },
    mounted() {
        const user = userStore();
        this.isLogin = user.isLoggedIn;
        if (this.isLogin)
            this.username = user.user.username;
    },
    methods: {
        returnToHome(){
            router.push('/home');
        },
        addToCart() {
            alert("Your product has been");
        }
    },
    components: { Books }
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
.logo {
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
</style>
