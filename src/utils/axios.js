import axios from 'axios';

axios.defaults.baseURL = 'http://52.67.252.83/api';

// if (process.env.NODE_ENV === 'production') {
//     axios.defaults.baseURL = 'http://52.67.252.83/api';
// } else {
//     axios.defaults.baseURL = 'http://vivala.dev/api';
}

export default axios;