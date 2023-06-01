import { defineStore } from 'pinia'

export const userStore = defineStore('cart', {
    state: () => ({
        cartList: [],
    }),
    actions: {
        getCartList(data) {
            this.cartList = data;
        },
        clearCartList() {
            this.cartList = [];
        },
        addProduct(data) {
            this.cartList.push(data);
        },
        removeProduct(data) {
            let i = this.cartList.find(data);
            this.cartList.splice(i, 1);
        }
    },
})
