// const stickyNotes = localStorage.getItem("stickyNotes");

const initialState = {
  notesArr: [],
  // notesArr: stickyNotes ? JSON.parse(stickyNotes) : [],
};
const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, notesArr: [...state.notesArr, action.payload] };
    case "DELETE":
      return {
        notesArr: action.payload,
      };
    case "EDIT":
      return {
        notesArr: action.payload,
      };

    default:
      return state;
  }
};
export default NotesReducer;
