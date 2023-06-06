<template>
    <div class="log-in-container">
        <div class="log-in-window">
            <span class="log-in-title" @click="backToHome" style="cursor: pointer;">
                    Log in
            </span>
            <van-form @submit="onSubmit" class="log-in-form">
                <van-field class="log-in-input" v-model="state.username" placeholder="username" name="username">
                    
                </van-field>
                <van-field  class="log-in-input" v-model="state.password" placeholder="password" name="password">

                </van-field>
                <van-button type="primary" native-type="submit">Submit</van-button>
                <div class="sign-up-title">Don't have an account?</div>
                <div class="sign-up" @click="goToSignUp" style="color: blue;cursor: pointer;margin-bottom: 10px;">Sign up</div>
            </van-form>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { login } from '@/service/user'
import md5 from 'js-md5'
import router from '../router/index'
import { userStore } from '../store/user'
const user = userStore();
const state = reactive({
    username: '',
    password: ''
})

const onSubmit = async (values) => {
    console.log("login request sent");
    const data = await login({
     "username": values.username,
     "password": md5(values.password)
    })
    console.log(data);
    if(data.code === 200){
        console.log("login success");
        console.log(data);
        console.log(data.data[0].user_id);
        user.login(data.data[0].user_id, values.username, md5(values.password));
        console.log(user.user.id);
        router.push('/')
    }else{
        console.log('login failed');
    }
}

const goToSignUp = () => {
    router.push('/signup');
}

const backToHome = () => {
    router.push('/')
}
</script>
<style>
:root {
    --log-in-window-height: 350px;
    --log-in-window-width: 400px;
}
.log-in-container {
    width: 100%;
    height: 100%;
    display: block;
    background: url('/login_background.jpg') center no-repeat;
    position: relative;
}
.log-in-window {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(calc(var(--log-in-window-width)/2 * (-1)), calc(var(--log-in-window-height)/2 * (-1)));
    opacity: 0.7;
    background-color: white;
    box-shadow: 0 5px 5px 0;
    height: var(--log-in-window-height);
    width: var(--log-in-window-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
}
.log-in-title {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #000;
    font-size: 30px;
}
.log-in-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.log-in-input {
    color: #000 !important; 
    margin: 10px 0px;
    width: calc(var(--log-in-window-width) - 40px) !important;
    border: 1px solid;
    border-color: lightcoral;
    border-radius: 10px;
}
</style>