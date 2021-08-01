import {ITodo} from './type'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

export const SET_NEW_TODO = 'SET_NEW_TODO'
// retrieve all the todos
export const RETRIEVE_TODOS = 'RETRIEVE_TODOS'

export type ActionTypes = 
| {type : typeof RETRIEVE_TODOS; payload: ITodo[]}
| {type : typeof ADD_TODO}
| {type : typeof DELETE_TODO; payload: any}
| {type : typeof UPDATE_TODO; payload: any}
| {type : typeof SET_NEW_TODO; payload:{
    title:string,
    end_date: string
}}



