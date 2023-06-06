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

export function signup(params) {
  return axios.post('/signup/', params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}