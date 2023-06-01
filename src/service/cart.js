import axios from '../utils/axios'

export function getCartList(params) {
    return axios.get('/cart', params);
}

export function setCartList(data) {
    return axios.post('/cart', data);
}