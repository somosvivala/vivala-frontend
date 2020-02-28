import axios from 'axios';

//Se vier algo no REACT_APP_API_URL usar ele como BASE_URL
if (process.env.REACT_APP_API_URL) {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
} else {
    axios.defaults.baseURL = 'https://api.vivala.com.br/api';
}

export default axios;
