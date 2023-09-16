import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./Reducers/TodoSliders";
export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
