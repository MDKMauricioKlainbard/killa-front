import axios from "axios";
import { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:1337/api/'
})

export default api