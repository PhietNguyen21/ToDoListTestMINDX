import { combineReducers } from "redux";
import { TodoReducer } from "./TodoReducer/TodoReducer";

const rootReducer = combineReducers({
  TodoReducer: TodoReducer,
});

export default rootReducer;
