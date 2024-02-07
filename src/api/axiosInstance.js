import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://todos-crud.academlo.tech/"
});