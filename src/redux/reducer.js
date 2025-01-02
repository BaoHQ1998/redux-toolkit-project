import { combineReducers } from "redux";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  todoList: todoSlice,
});
export default rootReducer;
  