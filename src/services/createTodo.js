import { axiosInstance } from "../api/axiosInstance";

export const createTodo = async (todoData) => {
    try {
        await axiosInstance.post("todo/",todoData);
    } catch (error) {
        console.error(error);
    }
}