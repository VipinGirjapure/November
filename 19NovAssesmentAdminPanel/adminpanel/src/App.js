import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import "./App.css";
import AdminPage from "./Pages/AdminPage/AdminPage";
import LogIn from "./Pages/LogIn/LogIn";
import UserPage from "./Pages/UserPage/UserPage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import Header from "./Components/Header/Header";

const firebaseConfig = {
  apiKey: "AIzaSyBBlREXnLq9CJv_Pr2CXm8p8dzenJeVJKY",
  authDomain: "chat-app-firebase-c0508.firebaseapp.com",
  databaseURL: "https://chat-app-firebase-c0508-default-rtdb.firebaseio.com",
  projectId: "chat-app-firebase-c0508",
  storageBucket: "chat-app-firebase-c0508.appspot.com",
  messagingSenderId: "1068506541805",
  appId: "1:1068506541805:web:bb866cef8d3529b8e626e4",
  measurementId: "G-QLCMYZ0H78"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestoreDb = getFirestore(app);
export const storage = getStorage();

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
