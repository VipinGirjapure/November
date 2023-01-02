import { combineReducers, configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./Reducer";

const rootReducer = combineReducers({
  NotesReducer: NotesReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
