import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");

function TEMP() {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    socket.on("data", (d: any) => {
      console.log("data", d);
    });

    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  const handlerEmit = () => {
    socket.emit("data", { name: name });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={() => handlerEmit()}>Click here</button>
      </header>
    </div>
  );
}

export default TEMP;
