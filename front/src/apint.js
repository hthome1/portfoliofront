import axios from 'axios'

const apint = axios.create({
    baseURL: 'https://portfoliotecweb.herokuapp.com/'
});

export default apint;