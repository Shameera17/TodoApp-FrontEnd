import {
  TODO_SUCCESS,
  TodoDispatchTypes,
  TODO_FAIL,
  TODO_LOADING,
} from "./actionTypes";



// redux implementation
const initialState : any = {
  loading: false,
  todos: [],
  
};

const todoReducer = (
  state = initialState,
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
