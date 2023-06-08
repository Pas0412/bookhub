<template>
  <div class="search-container">
    <div class="logo-container" @click="returnToHome">
      <img class="logo" src="../assets/book.svg" />
      <div class="title">BookHub Search</div>
    </div>
    <div class="search">
      <el-input
        class="search-input"
        :prefix-icon="Search"
        v-model="input"
        placeholder="What are you looking for?"
        @keyup.enter="handleChange"
      />
    </div>
    <div class="title-result">Search Result</div>
    <books :books="booklist"></books>
    <el-empty description="Sorry, there is no result" v-show="isResultEmpty" />
    <div v-show="isButtonDisabled" style="margin-top: 20px">
      No more results
    </div>
    <el-button
      v-show="!isResultEmpty"
      :disabled="isButtonDisabled"
      type="primary"
      plain
      @click="showMore"
      style="width: 100px; margin: 30px 0"
      >show more</el-button
    >
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import Books from "@/components/Books.vue";
import router from "../router";
import { getSearchResult } from "../service/book";
const input = ref("");

function returnToHome() {
  router.push("/home");
}

const fetchData = async (n, len) => {
  let searchStr = localStorage.getItem("search");
  try {
    // 执行异步操作
    const response = await getSearchResult({ search: searchStr, nb: n });

    // 更新数据
    booklist.value = response;
    if (booklist.value.length == 0) {
      isResultEmpty.value = true;
    } else {
      isResultEmpty.value = false;
    }
    if (booklist.value.length == len) {
      isButtonDisabled.value = true;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const booklist = ref([]);
const isResultEmpty = ref(false);
const isButtonDisabled = ref(false);

var n = 12;

const showMore = () => {
  n += 12;
  let len = booklist.value.length;
  fetchData(n, len);
};

const handleChange = () => {
  n = 12;
  localStorage.setItem("search", input.value);
  fetchData(n);
};

// 在组件加载时执行异步操作
onMounted(async () => {
  await fetchData(n); // 等待数据获取完成
});
</script>
<style scoped>
.search-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  margin: 100px 0 100px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 700px;
  height: 50px;
  --el-input-border-radius: 20px;
}

.title-result {
  font-size: 30px;
  font-weight: bold;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin: 0 0 50px 170px;
}
</style>
