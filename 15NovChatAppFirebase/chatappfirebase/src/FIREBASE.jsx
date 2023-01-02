import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyBBlREXnLq9CJv_Pr2CXm8p8dzenJeVJKY",
  authDomain: "chat-app-firebase-c0508.firebaseapp.com",
  projectId: "chat-app-firebase-c0508",
  storageBucket: "chat-app-firebase-c0508.appspot.com",
  messagingSenderId: "1068506541805",
  appId: "1:1068506541805:web:bb866cef8d3529b8e626e4",
  measurementId: "G-QLCMYZ0H78"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider()