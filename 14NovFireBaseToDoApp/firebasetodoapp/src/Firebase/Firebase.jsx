import { initializeApp } from "firebase/app";
import { getDatabase,  } from "firebase/database";
export const firebaseConfig = {

  apiKey: "AIzaSyD9cUNcJiS-EtQpXB-TkNrYPngYt6Zv3mU",
  authDomain: "todoapp-66d97.firebaseapp.com",
  databaseURL: "https://todoapp-66d97-default-rtdb.firebaseio.com",
  projectId: "todoapp-66d97",
  storageBucket: "todoapp-66d97.appspot.com",
  messagingSenderId: "137875800974",
  appId: "1:137875800974:web:1ef02109d91fa882449adf",
  measurementId: "G-0YC3M19TBC",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
