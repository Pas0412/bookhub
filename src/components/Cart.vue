<template>
  <div class="cart">
    <van-nav-bar title="My Cart" />
    <van-empty v-if="cartList.length === 0" description="Your cart is empty." />
    <van-list v-else>
      <van-cell
        v-for="product in cartList"
        :key="product.book_id"
        :title="'Book title : ' + product.title"
        :label="'Book price : ' + product.price"
        :is-link="true"
        style="
          padding-left: 100px;
          font-weight: 700;
          font-size: 30px;
          line-height: 40px;
          border: solid 1px;
          border-color: lightgrey;
        "
      >
        <img
          :src="product.img_s"
          class="product-image"
          slot="icon"
          @click="goToProductDetails(product.book_id)"
        />
        <van-stepper
          v-model="product.count"
          :min="1"
          show-plus-minus
          @change="handleChange($event, product)"
        />
        <van-button
          class="remove-from-cart-btn"
          size="small"
          type="warning"
          icon="delete"
          @click="removeFromCart(product)"
        >
          Remove
        </van-button>

        <div slot="footer">
          <van-cell-group>
            <van-cell title="Total" :label="`$${cartTotal.toFixed(2)}`" />
          </van-cell-group>
        </div>
      </van-cell>
    </van-list>
    <van-submit-bar
      v-if="cartList.length > 0"
      :price="cartTotal.toFixed(2)"
      button-text="Checkout"
      @click="goToPay"
    />
  </div>
</template>

<script>
import { nextTick } from "vue";
import { getCartList, removeCartList, setCartList } from "../service/cart";
import { userStore } from "../store/user";
export default {
  name: "cart",
  data() {
    return {
      user_id: -1,
      cartList: [],
    };
  },
  mounted() {
    const user = userStore();
    this.user_id = user.user.id;
    console.log(this.user_id);
    this.fetchCart();
  },
  computed: {
    cartTotal() {
      return this.cartList.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
  },
  methods: {
    async fetchCart() {
      try {
        const response = await getCartList({ id: this.user_id });
        this.cartList = response;
        console.log(this.cartList);
      } catch (error) {
        console.error(error);
        // 处理错误
      }
    },
    async removeFromCart(product) {
      // Remove product from cart
      console.log(`Product ${product.title} removed from cart!`);
      await removeCartList({ user_id: this.user_id, book_id: product.book_id });
      this.refreshPage();
    },
    async removeAll(){
      await removeCartList({ user_id: this.user_id, book_id: -1 });
      this.refreshPage();
    },
    goToProductDetails(id) {
      this.$nextTick(() => {
        console.log("id:" + id);
        localStorage.setItem("detail", id);
        this.$router.push({ name: "detail" });
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    refreshPage() {
      nextTick(() => {
        location.reload();
      });
    },
    async handleChange(event, product) {
      console.log(product.book_id, typeof event, typeof product.book_id);
      await setCartList({
        user_id: this.user_id,
        book_id: product.book_id,
        count: event,
      });
    },
    goToPay() {
        this.removeAll();
        alert('Payment success!');
    }
  },
};
</script>
<style scoped>
.product-image {
  height: 170px;
  width: 120px;
  margin-bottom: 70px;
}

.remove-from-cart-btn {
  margin-left: 20px;
  transform: translateY(-7px);
}
</style>
