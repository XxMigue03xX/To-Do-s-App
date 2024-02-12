import { axiosInstance } from "../api/axiosInstance";

export const createTodo = async (todoData) => {
    try {
        await axiosInstance.post("todos/",todoData);
    } catch (error) {
        console.error(error);
    }
}