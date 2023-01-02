import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "./App.css";
import Main from "./Components/Main";

const firebaseConfig = {
  apiKey: "AIzaSyBBlREXnLq9CJv_Pr2CXm8p8dzenJeVJKY",
  authDomain: "chat-app-firebase-c0508.firebaseapp.com",
  databaseURL: "https://chat-app-firebase-c0508-default-rtdb.firebaseio.com",
  projectId: "chat-app-firebase-c0508",
  storageBucket: "chat-app-firebase-c0508.appspot.com",
  messagingSenderId: "1068506541805",
  appId: "1:1068506541805:web:bb866cef8d3529b8e626e4",
  measurementId: "G-QLCMYZ0H78",
};

function App() {
  return (
    <>
      <Main />
    </>
  );
}
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
export default App;
