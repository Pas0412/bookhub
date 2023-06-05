import axios from '../utils/axios'

export function getfavoriteList(params) {
    return axios.post('/favorite/', params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function setfavoriteList(params) {
    return axios.post('/setfavorite/', params);
}