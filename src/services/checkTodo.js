import { axiosInstance } from "../api/axiosInstance";

export const checkTodo = async (id) => {
    try {
        await axiosInstance.patch(`todos/${id}/`, {isCompleted: true})
    } catch (error) {
        console.error(error);
    }
}