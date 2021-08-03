import { TodoInterface } from "./type";
export const TODO_LOADING = "TODO_LOADING";
export const TODO_FAIL = "TODO_FAIL";
export const TODO_SUCCESS = "TODO_SUCCESS";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_NEW_TODO = "SET_NEW_TODO";


export type TodoDispatchTypes =
  | { type: typeof TODO_LOADING }
  | { type: typeof TODO_FAIL }
  | { type: typeof TODO_SUCCESS; payload: TodoInterface[] }
  | {
      type: typeof ADD_TODO;
      payload: {
        title: string;
        end_date: string;
      };
    }
  | { type: typeof DELETE_TODO; payload: string }
  | { type: typeof UPDATE_TODO; payload: string };
