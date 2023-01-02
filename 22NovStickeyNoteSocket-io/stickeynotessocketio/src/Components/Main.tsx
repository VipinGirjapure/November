import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Draggable from "react-draggable"; // The default
import "./Main.css";
const socket = io("https://stickey-notes.herokuapp.com");
const Main = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [inputNote, setInputNote] = useState<any>("");
  const [notes, setNotes] = useState<any>([]);

  const handleAddButton = () => {
    setIsAdd(!isAdd);
  };
  function addNote(event: any) {
    let newArr = [
      {
        note: inputNote,
        id: Math.random(),
        X: event.screenX,
        Y: event.screenY,
      },
    ];
    setNotes(newArr);
    socket.emit("data", newArr);
  }
  useEffect(() => {
    socket.on("data", (d) => {
      console.log("data", d);
      setNotes(d);
    });

    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);
  function removeNote(ID: any) {
    let newArr = notes.filter((item: any) => item.id !== ID);
    setNotes(newArr);
    console.log(newArr);
    socket.emit("data", newArr);
  }
  function showCoords(event: any) {
    socket.emit("data", [
      {
        note: inputNote,
        id: Math.random(),
        X: event.screenX,
        Y: event.screenY,
      },
    ]);
    console.log("X coords: " + event.screenX + ", Y coords: " + event.screenY);
    // addNote(event)
  }
  const handleDrag = (ITEM: any) => {
    console.log(ITEM);
  };

  return (
    <>
      <button onClick={() => handleAddButton()}>Add Note</button>
      <div className="main-page">
        {isAdd ? (
          <div className="main-add-note">
            <h3>Add Stickey Note</h3>
            <textarea
              name=""
              id=""
              style={{ height: "80px", outline: "none" }}
              onChange={(e) => setInputNote(e.target.value)}
              value={inputNote}
            ></textarea>
            <button onClick={addNote}>Add Note</button>
          </div>
        ) : null}
        <div className="notes-list">
          {notes.map((item: any, i: any) => {
            return (
              <Draggable key={i} position={{ x: item.X, y: item.Y }}>
                {/* <Draggable key={i}> */}
                <div
                  className="notes-list-container"
                  onClick={(e: any) => showCoords(e)}
                >
                  <h6 onClick={() => handleDrag(item)}>Stickey Note</h6>
                  <div className="notes-list-container-item">{item.note}</div>
                  <button
                    onClick={() => removeNote(item.id)}
                    style={{
                      color: "red",
                      backgroundColor: "white",
                      border: "none",
                    }}
                  >
                    X
                  </button>
                </div>
              </Draggable>
            );
          })}
          {/* {data?.map((item: any, i: any) => {
                <Draggable key={i} defaultPosition={{ x: item.x, y: item.Y }}>
                <div className="notes-list-container">
                  <h6>Stickey Note</h6>
                  <div className="notes-list-container-item">{item.note}</div>
                </div>
              </Draggable>
              })
           } */}
        </div>
      </div>
    </>
  );
};
export default Main;
