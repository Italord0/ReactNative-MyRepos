import axios from 'axios';

const webservice = axios.create({
    baseURL: 'https://api.github.com'
});

export default webservice;