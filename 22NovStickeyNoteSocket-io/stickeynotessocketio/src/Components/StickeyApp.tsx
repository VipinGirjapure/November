import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");

function App() {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    socket.on("data", (d) => {
      console.log("data", d);
    });

    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  const handlerEmit = () => {
    socket.emit("data", { name: name, age: 20, arr: [1, 2, 3, "23"] });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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

export default App;
