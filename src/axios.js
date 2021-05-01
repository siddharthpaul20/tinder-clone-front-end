import axios from 'axios';

const instance = axios.create({
    baseURL: "https://siddharth-tinder-backend.herokuapp.com"
});

export default instance;