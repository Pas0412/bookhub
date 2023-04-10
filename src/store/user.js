import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false
    }),
    actions: {
        login(username, password) {
            // 这里可以调用API进行用户登录验证
            // 如果登录成功，则将用户信息存储到state中
            this.user = {
                username,
                password,
            };
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('user', JSON.stringify(this.user))
        },
        logout() {
            // 将用户信息从state中删除
            this.user = null;
            this.isLoggedIn = false;
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user')
        },
        checkLogin() {
            // 从localStorage中恢复登录状态
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
            const user = JSON.parse(localStorage.getItem('user'))
            this.isLoggedIn = isLoggedIn
            this.user = user
        },
    },
})
