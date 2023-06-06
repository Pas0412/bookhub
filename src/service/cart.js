import axios from '../utils/axios'

export function getCartList(params) {
    return axios.post('/cart/', params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function addCart(params) {
    return axios.post('/addtocart/', params);
}

export function setCartList(params) {
    return axios.post('/setcart/', params);
}

export function removeCartList(params) {
    return axios.post('/removecart/', params);
}