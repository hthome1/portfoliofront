import axios from 'axios'

const apint = axios.create({
    baseURL: 'http://portfoliotecweb.herokuapp.com'
});

export default apint;