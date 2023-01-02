import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../../blocks/login/LogIn";
import SignUp from "../../blocks/signup/SignUp";
import Navbar from "./navbar/Navbar";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
