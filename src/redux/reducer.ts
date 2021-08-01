// redux implementation
import {ADD_TODO,DELETE_TODO, UPDATE_TODO,SET_NEW_TODO, RETRIEVE_TODOS, ActionTypes} from './actionTypes'
import {addTodo, deleteTodo, updateTodo, setNewTodo} from './actionCreators'
const initialState = {
    todos: [],
    newTodo: ""
}

function todoReducer(state = initialState, action: ActionTypes){
switch(action.type){
    case SET_NEW_TODO : return {
        ...state,
        todos: action.payload
    }
    case DELETE_TODO : return {
        
    }
default:
    return state
}
}