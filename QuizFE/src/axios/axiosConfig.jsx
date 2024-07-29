import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const baseUrl = import.meta.env.VITE_BackEndUrl

// console.log(baseUrl)

const UserAuthenticate = axios.create({
    baseURL: `${baseUrl}/User`
})

export {UserAuthenticate}