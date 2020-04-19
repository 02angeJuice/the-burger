import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-burger-b5132.firebaseio.com',
});

export default instance;
