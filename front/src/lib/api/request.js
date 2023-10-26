import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ADDR,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json'
  },
  timeout: 30000
});

export default axiosInstance;