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
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";

export default {
  components: {
    BookCard,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      default: "All",
    },
  },
  data() {
    return {
      booksByCategory: [],
    };
  },
  methods: {
    sortByCategory(category) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].category == category) {
          this.booksByCategory.push(this.books[i]);
        }
      }
      console.log(this.booksByCategory);
    },
  },
  mounted() {
    this.sortByCategory(this.category);
  },
};
</script>

<style scoped>
.book-list-container {
    display: flex;
    flex-direction: column;
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
