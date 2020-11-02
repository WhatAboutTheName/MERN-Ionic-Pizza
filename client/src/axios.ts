import Axios, { AxiosInstance } from 'axios';

export const axios: AxiosInstance | any = Axios.create({
    baseURL: "http://localhost:5000",
    responseType: "json"
});
