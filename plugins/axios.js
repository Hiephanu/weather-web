import axios from "axios";
const axiosInstance = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    baseURL:'https://api.weatherapi.com/v1/'
  });
export default defineNuxtPlugin(async ()=>{
    return{
        provide:{
            axiosInstance:axiosInstance,
        }
    }
})