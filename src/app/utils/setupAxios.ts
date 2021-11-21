import axios from 'axios';

export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const setupDefaults = () : void => {
  axios.defaults.baseURL = API_ENDPOINT;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.get['Content-Type'] = 'application/json';
  axios.defaults.headers.delete['Content-Type'] = 'application/json';
  axios.defaults.headers.post.Accept= 'application/json';
  axios.defaults.headers.get.Accept = 'application/json';
  axios.defaults.headers.delete.Accept = 'application/json';
  axios.defaults.timeout = 10000;
};

export default setupDefaults;