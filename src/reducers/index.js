import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todosReducer from "./todosReducer";

export default combineReducers({ 
    login: loginReducer,
    tasks: todosReducer,
});