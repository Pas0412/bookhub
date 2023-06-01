<template>
  <div class="search-container">
    <div class="logo-container" @click="returnToHome">
        <img class="logo" src="../assets/book.svg" />
        <div class="title">BookHub Search</div>
    </div>
    <div class="search">
      <el-input class="search-input" :prefix-icon="Search" v-model="input" placeholder="What are you looking for?" />
    </div>
    <books :books="booklist"></books>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue'
import Books from '@/components/Books.vue'
import picture from "/src/assets/1.jpeg";
import router from "../router";
const input = ref("");

function returnToHome() {
  router.push('/home');
};

const booklist = [
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
    ];
</script>
<style scoped>
.search-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 100px;
    cursor: pointer;
}

.logo {
    height: 60px;
    width: 60px;
    margin-right: 10px;
}

.title {
    font-size: 50px;
    color: blue;
    font-weight: bold;
    font-family: "Nunito San";
}

.search {
    display: flex;
    margin: 100px 0 200px 0px;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.search-input {
    width: 700px;
    height: 50px;
    --el-input-border-radius: 20px;
}

</style>
