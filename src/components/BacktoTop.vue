<template>
    <div class="back-to-top" v-show="isVisible" @click="scrollToTop">
      <img src="../assets/backtop.svg" alt="" class="backtop-logo">
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        scrollToTop(){
          console.log('trigger backToTop');
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
  };
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: opacity .3s;
    z-index: 1;
    border-radius: 50%;
    border: 1px solid;
  }
  
  .back-to-top:hover {
    opacity: 0.7;
  }
  
  .backtop-logo {
    height: 30px;
    width: 30px;
  }
  </style>
  
