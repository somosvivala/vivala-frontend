import axios from 'axios';

// if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://api.vivala.com.br/api';
// } else {
//     axios.defaults.baseURL = 'http://vivala.dev/api';
// }

export default axios;
