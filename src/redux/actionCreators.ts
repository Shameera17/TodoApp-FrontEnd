import { Dispatch } from "redux";
import {
  TodoDispatchTypes,
  TODO_LOADING,
  TODO_FAIL,
  TODO_SUCCESS,
} from "./actionTypes";
import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-type": "application/json",
  },
});

// standard interface and functions
export const GetTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
  try {
    dispatch({
      type: TODO_LOADING,
    });
    const response = await http.get("/todos");
    console.log("response", response.data);
    
    dispatch({
      type: TODO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TODO_FAIL,
    });
  }
};
export const AddTodo = (title: string, end_date: string) => async () => {
  try {
    const data = { title, end_date };
    console.log("data-000",data)
    const postResponse = await http.post("/todos", data);
    console.log("response", postResponse)
  } catch (error) {
    console.log("error");

  }
};
export const UpdateTodoState = (id: string) => async () => {
  try {
    console.log(id)
    const response = await http.put(`/todos/${id}`);
    console.log("response", response.data);
    return response;

  } catch (error) {
    console.log("error");
  }
};

export const DeleteTodo = (id: string) => async () => {
  try {
    console.log(id)
    const response = await http.delete(`/todos/${id}`);
    console.log("response", response.data);
    return response;
  } catch (error) {
    console.log("error");

  }
};
