import axios from '../utils/axios'

export function getAllBooks(params) {
    return axios.post('/all/', params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getBookDetail(params) {
    return axios.post('/detail/', params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getMostRated(params) {
  return axios.post('/rated/', params)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error(error);
    return [];
  });
}

export function getMostPopular(params) {
  return axios.post('/popular/', params)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error(error);
    return [];
  });
}

export function getSearchResult(params) {
  return axios.post('/search/', params)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error(error);
    return [];
  });
}

export function getRecommendByBook(params) {
  return axios.post('/recommendbybook/', params)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error(error);
    return [];
  });
}