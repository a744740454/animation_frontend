import axios from "./axios";
import config from 'config'


export function get_banner() {
    // axios.get(axios.defaults.baseURL + '/banners').then((res)=> {
    //     console.log(res)
    // }).catch(err=>{
    //     console.log(err)
    // })
    return axios.get(axios.defaults.baseURL + '/banners')
}