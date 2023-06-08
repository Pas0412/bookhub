<template>
  <div class="book-list-container">
    <!---<div class="book-title">{{ this.category }}</div>-->
    <div class="book-list">
      <div
        class="book-list-item"
        v-for="book in booksByCategory"
        :key="book.id"
      >
        <book-card :book="book" />
      </div>
    </div>
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
      style="width: 100px; margin: 30px 0; z-index: 1"
      >show more</el-button
    >
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import { getAllBooks } from "../service/book";

export default {
  components: {
    BookCard,
  },
  props: {
    category: {
      type: String,
      default: "All",
    },
  },
  data() {
    return {
      booksByCategory: [],
      nb: 20,
      isButtonDisabled: false,
      isResultEmpty: false,
    };
  },
  methods: {
    showMore() {
      this.nb += 10;
      let len = this.booksByCategory.length;
      this.fetchAllBooks(len);
    },
    async fetchAllBooks(len) {
      try {
        console.log(this.category);
        const response = await getAllBooks({
          category: this.category,
          nb: this.nb,
        });
        this.booksByCategory = response;
        if (this.booksByCategory.length == 0) {
          this.isResultEmpty = true;
        } else {
          this.isResultEmpty = false;
        }
        if (this.booksByCategory.length == len) {
          this.isButtonDisabled = true;
        }
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
  },
  mounted() {
    this.fetchAllBooks();
  },
};
</script>

<style scoped>
.book-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}

.book-title {
  margin: 20px;
  margin-left: 80px;
  font-size: 30px;
  font-weight: bold;
}
.book-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 80px;
}

.book-list-item {
  width: calc(33.33% - 15px);
  margin-right: 15px;
  margin-bottom: 15px;
}

@media (max-width: 992px) {
  .book-list-item {
    width: calc(50% - 15px);
  }
}

@media (max-width: 576px) {
  .book-list-item {
    width: 100%;
  }
}
</style>
