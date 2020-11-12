import axios from 'axios'

const apint = axios.create({
    baseURL: 'http://portfoliotweb.herokuapp.com'
});

export default apint;