import {ADD_TODO,DELETE_TODO, UPDATE_TODO,SET_NEW_TODO, RETRIEVE_TODOS, ActionTypes} from './actionTypes'

// export const functionName = (): ActionTypes => ({type : ADD_TODO})
export const addTodo = (): ActionTypes => ({type : ADD_TODO})
export const deleteTodo = (id:any): ActionTypes => ({type : DELETE_TODO, payload:id})
export const updateTodo = (id:any): ActionTypes => ({type : UPDATE_TODO, payload:id})
export const setNewTodo = (title: string, end_date: string): ActionTypes => ({type : SET_NEW_TODO, payload:{
    title,
    end_date
}})
