import {combineReducers} from 'redux'
import todoReducer from './TodoReducer'
const RootReducer = combineReducers(todoReducer)


export default RootReducer