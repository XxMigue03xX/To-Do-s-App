import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { getTodos } from './services/getTodos';
import { deleteTodoById } from './services/deleteTodoById';
import { createTodo } from './services/createTodo';
import './App.css'

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [todos, setTodos] = useState([]);
  
  const loadTodos = async () => {
    const todoList = await getTodos();
    setTodos(todoList);
  }

  const handleDeleteTodo = async (id) => {
    await deleteTodoById(id);
    loadTodos();
  }

  const handleCreateTodo = async (data) => {
    await createTodo({
      ...data,
      isCompleted: false
    })
    loadTodos()
  }

  useEffect(() => {
    loadTodos();
  }, [])

  return (
    <>
      <h1>To Do App</h1>

      {!todos.length && <p>No hay todos</p>}

      {Boolean(todos.length) && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <b>{todo.title}: </b>
              {todo.description}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
