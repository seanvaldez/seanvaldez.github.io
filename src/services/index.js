// http provider

import axios from 'axios';

// index config http provider

const createHttpInstance = (url = '', config = {}) => {
  return axios.create({
    ...config,
    baseURL: url,
  });
};

export const $dummyHttp = createHttpInstance('https://dummyjson.com');
