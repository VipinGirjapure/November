export const AddAction = (payload) => {
  // localStorage.setItem('stickyNotes',JSON.stringify(payload))
  return { type: "ADD", payload };
};
export const DeleteAction = (payload) => {
  return { type: "DELETE", payload };
};
export const EditAction = (payload) => {
  // console.log("payload", payload);
  return { type: "EDIT", payload };
};
