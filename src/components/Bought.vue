<template>
    <div class="bought">
      <van-nav-bar
        title="history"
      />
      <van-empty
        v-if="boughtList.length === 0"
        description="Your history is empty."
      />
      <van-list v-else>
        <van-cell
          v-for="product in boughtList"
          :key="product.book_id"
          :title="'Book title : ' + product.title"
          :label="'Book price : ' + product.price"
          :is-link="true"
          style="padding-left: 100px;font-weight: 700;font-size: 30px;line-height: 40px;"
        >
          <img :src="product.img_s" class="product-image" slot="icon" 
          @click="goToProductDetails(product.book_id)"
          />
          <el-rate
          v-model="product.rate"
          show-score
          text-color="#ff9900"
          :score-template="product.rate + ' points'"
          :colors="colors"
          style="margin-bottom: 10px"
          v-show="product.rate"
          @change="onRate(product.book_id, $event)"
        />
        </van-cell>
      </van-list>
    </div>
  </template>
  
  <script>
  import { nextTick } from 'vue';
  import { getboughtList, setrate } from '../service/bought';
  import { userStore } from '../store/user';
  export default {
      name: "bought",
    data() {
      return {
        user_id: -1,
        boughtList: [],
        value: 0.1
      };
    },
    mounted() {
      const user = userStore();
      this.user_id = user.user.id;
      console.log(this.user_id);
      this.fetchbought();
    },
    methods: {
      onRate(id, event){
        this.rate(id, event);
      },
      async fetchbought() {
        try {
          const response = await getboughtList({ id: this.user_id });
          this.boughtList = response;
        } catch (error) {
          console.error(error);
          // 处理错误
        }
      },
      async rate(book, rate) {
        try {
            await setrate({user_id: this.user_id, book_id: book, rate: rate*2});
        } catch(e) {
            console.error(e);
        }
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