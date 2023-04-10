<template>
  <div class="container">
    <div class="header">
      <router-link tag="span" to="/">
        <div class="home">
            <img class="home-logo" src="../assets/book-active.svg"/>Home
        </div>
        </router-link>
        <div class="logout" @click="handleLogout">
            Log out
        </div>
    </div>
    <div class="user-container">
      <div class="sidebar-container">
        <img src="../assets/avatar.png" />
        <span class="username">USERNAME</span>
        <van-sidebar
          class="sidebar"
          v-model="active"
          @change="handleSidebarChange"
        >
          <van-sidebar-item title="cart">Cart</van-sidebar-item>
          <van-sidebar-item title="favorites">Favorites</van-sidebar-item>
        </van-sidebar>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { userStore } from '../store/user'
import router from '../router/index'
export default {
  data() {
    return {
      active: 0,
      user: Object
    };
  },
  mounted() {
    const store = userStore();
    store.checkLogin();
    this.user = store;
    this.handleSidebarChange(this.active);
  },
  methods: {
    handleSidebarChange(activeName) {
      console.log(activeName);
      if (activeName === 0) {
        this.active = 0;
        this.$router.push({ path: "/user/cart" });
      } else if (activeName === 1) {
        this.active = 1;
        this.$router.push({ path: "/user/favorites" });
      }
    },
    handleLogout() {
      this.user.logout()
      router.push('/')
    }
  },
};
</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
}
.header {
  width: 100vw;
  background-color: #646cff;
  height: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
}
.home {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    font-weight: bold;
    font-size: 20px;
    color: white;
}
.home-logo {
    height: 30px;
    width: 30px;
    margin: 10px;
    color: white;
}
.user-container {
  display: flex;
}

.sidebar {
  width: 100%;
  text-align: center;
  font-size: 50px;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: lightgray;
  height: calc(100vh - 50px);
  text-align: center;
  align-items: center;
}

.sidebar-container span{
    margin: 30px 0;
    font-size: 15px;
    font-weight: bold;
}

.sidebar-container img {
  height: 100px;
  width: 100px;
  margin: 70px 70px 0;
  border-radius: 20px;
}

.logout {
    color: white;
    right: 40px;
    position: fixed;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 100px;
    padding: 5px;
    transition: all 0.5s;
}

.logout:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* 添加阴影 */
    cursor: pointer;
    transform: translateY(-1px);
}

.content {
  flex: 1;
  padding: 30px 20px
}
</style>
