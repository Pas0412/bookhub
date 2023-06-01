<template>
    <div class="book-card" @click="handleClick">
      <div class="book-image">
        <img :src="book.image" alt="">
      </div>
      <div class="book-info">
        <div class="book-name">{{ book.name }}</div>
        <div class="book-author">{{ book.author }}</div>
        <div class="book-category">{{ book.category }}</div>
        <div class="book-price">{{ book.price }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import router from '../router';
  export default {
    props: {
      book: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleClick() {
        // do something on card click
        console.log('clicked');
        // this.$router.push({ name: 'detail', params: { id: this.book.id } });
        // this.$router.push('/detail');
        
        this.$nextTick(() => {
          // router.push('detail');
          console.log(this.book.id)
          this.$router.push({ name: 'detail', params: { id: this.book.id } });
          // this.$router.push({ name: 'detail', params: { product: this.book } });
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .book-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow 0.3s;
    width: 400px;
  }
  
  .book-card:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .book-image {
    width: 120px;
    height: 160px;
    flex-shrink: 0;
    margin-right: 20px;
  }
  
  .book-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .book-info {
    flex-grow: 1;
    overflow: hidden;
  }
  
  .book-name {
    font-size: 18px;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .book-author {
    font-size: 16px;
    color: #999;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .book-category {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .book-price {
    font-size: 18px;
    color: #f60;
  }
  </style>
  