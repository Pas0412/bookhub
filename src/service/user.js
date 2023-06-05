import axios from '../utils/axios'

export function login(params) {
  return axios.post('/login/', params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}