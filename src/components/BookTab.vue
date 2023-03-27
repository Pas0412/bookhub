<template>
  <van-tabs class="tabs" v-model="active">
    <van-tab
      class="tab"
      v-for="category in categories"
      :key="category.id"
      :title="category.name"
    >
      <book-list style="transform: translateY(100px);" :books="books" :category="category.name"></book-list>
    </van-tab>
  </van-tabs>
</template>

<script>
import BookList from "./BookList.vue";
export default {
  components: {
    BookList,
  },
  props: {
    books: {
      type: Array,
      require: true,
    },
    categories: {
      type: Array,
      require: true,
    },
  },
  data(){
    return{
        active: 1
    }
  }
};
</script>

<style>
/* .tabs {
    margin: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
}

.tab {
    display: flex;
} */
</style>
