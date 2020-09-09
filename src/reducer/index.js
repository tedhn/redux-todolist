import { combineReducers } from "redux";
import { todoReducer } from "./todo";
import { valueReducer } from "./value";

export default combineReducers({ todoReducer, valueReducer });
