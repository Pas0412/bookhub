<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from './store/user'
export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter()
    const user = userStore()

    onMounted(() => {
      router.beforeEach((to, from, next) => {
        user.checkLogin();
        if (to.meta.requiresAuth && !user.isLoggedIn) {
          next({ path: '/login' })
        } else {
          next()
        }
      })
    })

    return {}
  },
})
</script>

<style lang="less">
html, body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: white;
}
#app {
  background-color: white;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.router-view{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    height: 100%;
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}
</style>