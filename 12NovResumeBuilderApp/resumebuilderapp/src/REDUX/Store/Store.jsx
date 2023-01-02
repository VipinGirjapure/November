// import { configureStore } from '@reduxjs/toolkit'
// import {actionTypes, firebaseReducer} from "react-redux-firebase";
// import {firestoreReducer} from "redux-firestore";

// export const store = configureStore({
//   reducer: {
//     firebaseReducer,
//     firestoreReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: {
//         ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR]
//     }
//   }),
// })

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Reducer from "../Reducer/FireStoreReducer";


const rootReducer = combineReducers({
  reducer: Reducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
