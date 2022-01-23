import axios from 'axios';

var API = axios.create({
    baseURL: 'https://lumus.wistis.ru/api/v1/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
export default {
    API,
}