<template>
    <div class="favorite">
      <van-nav-bar
        title="My Favorite"
      />
      <van-empty
        v-if="favoriteList.length === 0"
        description="Your favorite is empty."
      />
      <van-list v-else>
        <van-cell
          v-for="product in favoriteList"
          :key="product.book_id"
          :title="'Book title : ' + product.title"
          :label="'Book price : ' + product.price"
          :is-link="true"
          style="padding-left: 100px;font-weight: 700;font-size: 30px;line-height: 40px;"
        >
          <img :src="product.img_s" class="product-image" slot="icon" 
          @click="goToProductDetails(product.book_id)"
          />
          <van-button
            class="remove-from-favorite-btn"
            size="small"
            type="warning"
            icon="delete"
            @click="removeFromfavorite(product)"
          >
            Remove
          </van-button>
        </van-cell>
      </van-list>
    </div>
  </template>
  
  <script>
  import { nextTick } from 'vue';
  import { getfavoriteList, setfavoriteList } from '../service/favorite';
  import { userStore } from '../store/user';
  export default {
      name: "favorite",
    data() {
      return {
        user_id: -1,
        favoriteList: []
      };
    },
    mounted() {
      const user = userStore();
      this.user_id = user.user.id;
      console.log(this.user_id);
      this.fetchfavorite();
    },
    methods: {
      async fetchfavorite() {
        try {
          const response = await getfavoriteList({ id: this.user_id });
          this.favoriteList = response;
          console.log(this.favoriteList)
        } catch (error) {
          console.error(error);
          // 处理错误
        }
      },
      async removeFromfavorite(product) {
        // Remove product from favorite
        console.log(`Product ${product.title} removed from favorite!`);
        await setfavoriteList({ user_id: this.user_id, book_id: product.book_id, like: 0});
        this.refreshPage();
      },
      goToProductDetails(id) {
        localStorage.setItem('detail', id);
        this.$router.push({ name: 'detail'});
      },
      goBack() {
        this.$router.go(-1);
      },
      refreshPage() {
        nextTick(() => {
          location.reload();
        });
      },
    },
  };
  </script>
  <style scoped>
  .product-image {
    height: 170px;
    width: 120px;
    margin-bottom: 70px;
  }
  </style>