// redux implementation
import {ADD_TODO,DELETE_TODO, UPDATE_TODO,SET_NEW_TODO, RETRIEVE_TODOS, ActionTypes} from './actionTypes'
import {addTodo, deleteTodo, updateTodo, setNewTodo} from './actionCreators'
import {ITodo,ITodoState} from './type'



const initialState : ITodoState = {
    todos: [],
}

function todoReducer(state:ITodoState = initialState, action: ActionTypes){
switch(action.type){
    case RETRIEVE_TODOS : return {
        ...state,
        todos: action.payload
    }
    case SET_NEW_TODO : return {
        
    }
    case DELETE_TODO : return {

    }
    case UPDATE_TODO : return {

    }
default:
    return state
}
}

export default todoReducer