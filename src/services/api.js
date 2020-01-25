import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dev-radar-luis.herokuapp.com/'
});

export default api;