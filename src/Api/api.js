import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.28:8000/api/"

export const getAboutus = () =>{
    return axios.get('getaboutus')
}
export const InquireNow = (obj) =>{
    return axios.post('addinquiredata',obj)
}