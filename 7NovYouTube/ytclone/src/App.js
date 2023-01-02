import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import SingleVideo from "./Pages/SingleVideo.jsx/SingleVideo";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/watch/:id" element={<SingleVideo />} />
      </Routes>
      </BrowserRouter>
      {/* <Main/> */}
    </>
  );
}

export default App;
