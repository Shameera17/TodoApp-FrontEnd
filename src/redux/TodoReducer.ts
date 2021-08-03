import { TodoInterface, Store } from "./type";
import {
  TODO_SUCCESS,
  TodoDispatchTypes,
  TODO_FAIL,
  TODO_LOADING,
  ADD_TODO,
} from "./actionTypes";
import { AddTodo } from "./actionCreators";



// redux implementation
const initialState = {
  loading: false,
  todos: [],
  newTodo: ""
};

const todoReducer = (
  state: Store = initialState,
  action: TodoDispatchTypes
) => { 
  switch (action.type) {
    case TODO_FAIL:
      return {
        loading: false,
      };
    case TODO_LOADING:
      return {
        loading: true,
      };
    case TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
      

    default:
      return state;
  }
};

export default todoReducer;
