
import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import Login from "./Components/LOGIN/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const messaging = getMessaging(app);
getToken(messaging, { vapidKey: 'BAJPBhGDobgxqCkbVRBpr9ePyCsbwDJe2rVowgoTXdRFBscoXTMq4vE7BO47U8CRXbSukuRHXv4wk-HQzNpPyWQ' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
