import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../App";
import "./LogIn.css";
import { Box, Button, Typography, TextField } from "@mui/material";
const LogIn = () => {
  const [fieldsLogIn, setFieldsLogIn] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
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
     
        navigate("/admin");
      }
      console.log(user);
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
            sx={{
              marginTop: "5px",
              color: " #74BDCB",
              border: "0.2px solid #74BDCB",
            }}
            onClick={() => handleLogin()}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
