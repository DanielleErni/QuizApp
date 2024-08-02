import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const baseUrl = import.meta.env.VITE_BackEndUrl

// console.log(baseUrl)

const UserAuthenticate = axios.create({
    baseURL: `${baseUrl}/User`
})

const AxiosGetQuizList = axios.create({
    baseURL: `${baseUrl}/Quiz`
})

const AxiosCreateQuizList = axios.create({
    baseURL: `${baseUrl}/Quiz`
})
const AxiosUpdateQuizList = axios.create({
    baseURL: `${baseUrl}/Quiz`
})

const AxiosDeleteQuizList = axios.create({
    baseURL: `${baseUrl}/Quiz`
})

export {UserAuthenticate, AxiosGetQuizList, AxiosCreateQuizList, AxiosUpdateQuizList, AxiosDeleteQuizList}