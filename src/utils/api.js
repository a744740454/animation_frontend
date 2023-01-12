import axios from "./axios";
import config from 'config'


export function get_banner_api() {
    return axios.get(axios.defaults.baseURL + '/banners')
}

export function login_api(data) {
    return axios.post(axios.defaults.baseURL + '/login',data)
}