<template>
  <div class="cart">
    <van-nav-bar
      title="My Cart"
    />
    <van-empty
      v-if="cartProducts.length === 0"
      description="Your cart is empty."
    />
    <van-list v-else>
      <van-cell
        v-for="product in cartProducts"
        :key="product.id"
        :title="product.title"
        :label="product.price"
        :is-link="true"
        @click="goToProductDetails(product)"
      >
        <img :src="product.image" class="product-image" slot="icon" />
        <van-stepper v-model="product.quantity" :min="1" show-plus-minus />
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
      v-if="cartProducts.length > 0"
      :price="cartTotal.toFixed(2)"
      button-text="Checkout"
    />
  </div>
</template>

<script>
export default {
    name: "cart",
  data() {
    return {
      cartProducts: [
        {
          id: 1,
          title: "Product 1",
          price: 9.99,
          image: "https://via.placeholder.com/150",
          quantity: 1,
        },
        {
          id: 2,
          title: "Product 2",
          price: 19.99,
          image: "https://via.placeholder.com/150",
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    cartTotal() {
      return this.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
  methods: {
    removeFromCart(product) {
      // Remove product from cart
      console.log(`Product ${product.title} removed from cart!`);
      this.cartProducts = this.cartProducts.filter((p) => p.id !== product.id);
    },
    goToProductDetails(product) {
      this.$router.push({ name: "ProductDetails", params: { id: product.id } });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
</style>