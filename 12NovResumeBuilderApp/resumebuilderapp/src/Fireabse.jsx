import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4QnRq1ZO_7lMI5DNLvPpOsi-KbS84tPs",
  authDomain: "resumebuilderapp-d54d9.firebaseapp.com",
  projectId: "resumebuilderapp-d54d9",
  storageBucket: "resumebuilderapp-d54d9.appspot.com",
  messagingSenderId: "105850699802",
  appId: "1:105850699802:web:fd1a24ee808c18eac4d1a3",
  measurementId: "G-FDNGMW9V2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Authentification = getAuth(app);