import axios from '../utils/axios'

export function getAllCategories() {
    return axios.post('/categories/')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
  }