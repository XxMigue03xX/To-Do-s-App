import { axiosInstance } from "../api/axiosInstance";

export const deleteTodoById = async (id) => {
    try {
        await axiosInstance.delete(`todos/${id}/`);
    } catch (error) {
        console.error(error);
    }
}