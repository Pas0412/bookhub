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
import { onMounted, ref } from "vue";
import { Search } from '@element-plus/icons-vue'
import Books from '@/components/Books.vue'
import picture from "/src/assets/1.jpeg";
import router from "../router";
import { getAllBooks } from "../service/book";
const input = ref("");

function returnToHome() {
  router.push('/home');
};

const fetchData = async () => {
    try {
      // 执行异步操作
      const response = await getAllBooks();
      const data = response;

      // 更新数据
      booklist.value = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const booklist = ref([]);

  // 在组件加载时执行异步操作
  onMounted(async () => {
  await fetchData(); // 等待数据获取完成
});

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
