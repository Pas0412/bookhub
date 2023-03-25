<template>
    <div class="book-title">All</div>
    <div class="book-list">
      <div class="book-list-item" v-for="book in books" :key="book.id">
        <book-card :book="book" />
      </div>
    </div>
  </template>
  
  <script>
  import BookCard from '@/components/BookCard.vue';
  
  export default {
    components: {
      BookCard
    },
    props: {
      books: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .book-title {
    margin: 20px;
    margin-left: 80px;
    font-size: 30px;
    font-weight: bold;
  }
  .book-list {
    display: flex;
    flex-wrap: wrap;
    margin: 30px 80px;
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
  