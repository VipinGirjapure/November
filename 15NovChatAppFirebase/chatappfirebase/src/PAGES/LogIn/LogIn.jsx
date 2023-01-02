import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, set,get } from "firebase/database";

import { addDoc,collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// import { auth, firestoreDb} from "../../App";
import "./LogIn.css"
import { Box, Button, Typography, TextField } from "@mui/material";
const LogIn = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    age: "",
  });
  const [fieldsLogIn, setFieldsLogIn] = useState({
    email: "",
    password: "",
  });
  const [isLogIn, setIsLogIn] = useState(true);
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    setFieldsLogIn({
      ...fieldsLogIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        fieldsLogIn.email,
        fieldsLogIn.password
      );
      if (user.user.uid) {
        localStorage.setItem("uid", user.user.uid);
      // let myRef = addDoc(firestoreDb, 'users/'+user.user.uid)
      //   const res = await get(myRef)
      //   console.log(res)
        // localStorage.setItem('name', res.val().name)
        navigate("/main");
      }
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };





  return (
    <>
      {isLogIn ? (
        <Box className="LogInContainer">
          <Box className="log-in-box">
            <Typography textAlign="center" color="#FFA384" fontWeight="bold">
              LOG I
            </Typography>
            <TextField
              type="text"
              placeholder="email"
              value={fieldsLogIn.email}
              name="email"
              onChange={onChangeHandle}
              sx={{ marginTop: "10px" }}
            />
            <TextField
              type="password"
              placeholder="password"
              value={fieldsLogIn.password}
              name="password"
              onChange={onChangeHandle}
              sx={{ marginTop: "10px" }}
            />
            <Button
              sx={{ marginTop: "5px", color: "#FFA384" }}
              onClick={() => handleLogin()}
            >
              Log In
            </Button>
            <Typography
              onClick={() => setIsLogIn(false)}
              sx={{ cursor: "pointer" }}
            >
              New User Register here
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            border: "2px solid purple",
            borderTop: "none",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            textAlign="center"
            color="#FFA384"
            fontWeight="bold"
            sx={{ margin: "15px" }}
            variant="h6"
          >
            Register Here
          </Typography>
          <TextField
            sx={{ margin: "15px" }}
            type="text"
            placeholder="email"
            value={fields.email}
            name="email"
            onChange={onChangeHandle}
          />
          <TextField
            sx={{ margin: "15px" }}
            type="text"
            placeholder="password"
            value={fields.password}
            name="password"
            onChange={onChangeHandle}
          />
          <TextField
            sx={{ margin: "15px" }}
            type="text"
            placeholder="name"
            value={fields.name}
            name="name"
            onChange={onChangeHandle}
          />
          <TextField
            sx={{ margin: "15px" }}
            type="text"
            placeholder="age"
            value={fields.age}
            name="age"
            onChange={onChangeHandle}
          />
        
       
        </Box>
      )}
    </>
  );
};

export default LogIn;
