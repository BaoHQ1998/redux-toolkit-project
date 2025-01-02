// import { createStore } from "redux";
// import rootReducer from "./reducer";

// const store = createStore(rootReducer)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
});

export default store;
