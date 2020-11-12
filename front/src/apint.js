import axios from 'axios'

const apint = axios.create({
    baseURL: 'https://portfoliotweb.herokuapp.com/'
});

export default apint;