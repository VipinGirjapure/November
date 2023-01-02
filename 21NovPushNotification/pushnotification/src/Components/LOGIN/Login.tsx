import { Box, Typography, TextField, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../App";
import "./Login.css"
const Login = () => {
  const [fieldsLogIn, setFieldsLogIn] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandle = (e:any) => {
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
     
        navigate("/main");
      }
      // console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Box className="LogInContainer">
        <Box className="log-in-box">
          <Typography textAlign="center" color="FFA384" fontWeight="bold">
            LOG IN
          </Typography>
          <TextField
            type="text"
            placeholder="email"
            name="email"
            sx={{ marginTop: "10px" }}
            onChange={onChangeHandle}

          />
          <TextField
            type="password"
            placeholder="password"
            name="password"
            sx={{ marginTop: "10px" }}
            onChange={onChangeHandle}

          />
          <Button
            sx={{
              marginTop: "5px",
              color: " #74BDCB",
              border: "0.2px solid #74BDCB",
            }}
            onClick={()=>handleLogin()}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
