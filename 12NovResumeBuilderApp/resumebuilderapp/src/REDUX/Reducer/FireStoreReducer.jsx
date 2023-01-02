// import {combineReducers} from "redux";
// import {firebaseReducer} from "react-redux-firebase";
// import {firestoreReducer} from "redux-firestore";
// export const rootReducer = combineReducers({
//     firebase: firebaseReducer,
//     firestore: firestoreReducer
// });

const initialState = {
  inputData: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUTS":
      return { ...state, inputData: { ...state.inputData, ...action.payload } };

    default:
      return state;
  }
};
export default Reducer;
