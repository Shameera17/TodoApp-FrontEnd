import axios from 'axios'
import {ITodo} from '../redux/type'
// initialise axios
const http = axios.create({
    baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
})

// getTodos
const getAllTodos = () => {
    return http.get("/todos")
}

// addTodo
const createTodo = (data: ITodo) => {
    return http.post("/todos",data)
}

// updateTodo
const updateTodoActiveState = (id: any) => {
    return http.put(`/todos/${id}`)
}

// deleteTodo
const deleteTodo = (id: any) => {
    return http.delete(`/todos/${id}`)
}

const TodoServices = {
getAllTodos,
createTodo,
updateTodoActiveState,
deleteTodo
}

export default TodoServices;