<template>
    <div class="favorites">
      <van-nav-bar title="My Favorites"  />
      <van-empty v-if="favoriteProducts.length === 0" description="You have no favorite products." />
      <van-list v-else>
        <van-cell
          v-for="product in favoriteProducts"
          :key="product.id"
          :title="product.title"
          :label="product.price"
          :is-link="true"
          @click="goToProductDetails(product)"
        >
          <img :src="product.image" class="product-image" slot="icon" />
          <van-button class="add-to-cart-btn" size="small" type="primary" icon="cart-o" @click="addToCart(product)">
            Add to Cart
          </van-button>
          <van-button
            class="remove-from-favorites-btn"
            size="small"
            type="warning"
            icon="star-o"
            @click="removeFromFavorites(product)"
          >
            Remove from Favorites
          </van-button>
        </van-cell>
      </van-list>
    </div>
  </template>
  
  <script>
  export default {
    name: "favorites",
    data() {
      return {
        favoriteProducts: [
          {
            id: 1,
            title: 'Product 1',
            price: 9.99,
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 2,
            title: 'Product 2',
            price: 19.99,
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 3,
            title: 'Product 3',
            price: 29.99,
            image: 'https://via.placeholder.com/150',
          },
        ],
      };
    },
    methods: {
      addToCart(product) {
        // Add product to cart
        console.log(`Product ${product.title} added to cart!`);
      },
      removeFromFavorites(product) {
        // Remove product from favorites
        console.log(`Product ${product.title} removed from favorites!`);
        this.favoriteProducts = this.favoriteProducts.filter(p => p.id !== product.id);
      },
      goToProductDetails(product) {
        this.$router.push({ name: 'ProductDetails', params: { id: product.id } });
      },
      goBack() {
        this.$router.go(-1);
      },
    },
  };
  </script>
  