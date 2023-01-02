import { initializeApp, firebase } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import LogIn from "./PAGES/LogIn/LogIn";
import Main from "./PAGES/Main/Main";
export const firebaseConfig = {
  apiKey: "AIzaSyBBlREXnLq9CJv_Pr2CXm8p8dzenJeVJKY",
  authDomain: "chat-app-firebase-c0508.firebaseapp.com",
  projectId: "chat-app-firebase-c0508",
  storageBucket: "chat-app-firebase-c0508.appspot.com",
  messagingSenderId: "1068506541805",
  appId: "1:1068506541805:web:bb866cef8d3529b8e626e4",
  measurementId: "G-QLCMYZ0H78",
};

const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);
export const auth = getAuth(app);
export const firestoreDb = getFirestore(app);

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
