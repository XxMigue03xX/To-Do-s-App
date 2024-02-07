import { axiosInstance } from "../api/axiosInstance";

export const getTodos = async () => {
    try {
        const res = await axiosInstance.get("todos/");
        return res.data;
    } catch (error) {
        console.error(error);
    }
}