<template>
  <van-tabs class="tabs" v-model="active">
    <van-tab
      class="tab"
      v-for="category in categories"
      :key="category.id"
      :title="category.name"
    >
      <book-list style="transform: translateY(100px);" :category="category.name"></book-list>
    </van-tab>
  </van-tabs>
  <div style="height:300px;"></div>
</template>

<script>
import BookList from "./BookList.vue";
export default {
  components: {
    BookList,
  },
  props: {
    categories: {
      type: Array,
      require: true,
    },
  },
  data(){
    return{
        active: 1
    }
  },
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
