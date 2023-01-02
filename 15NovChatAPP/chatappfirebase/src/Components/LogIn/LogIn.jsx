import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Component } from "react";
import SendIcon from "@mui/icons-material/Send";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../../FIREBASE";
import "./LogIn.css";
import withRouter from "../withRouter";
class LogIn extends Component {
  handleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("'result", result);
        
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
      });
  };
  render() {
    return (
      <>
        <Box className="LogInContainer">
          <Box className="log-in-box">
            <Typography textAlign="center">LOG IN</Typography>

            <Button onClick={() => this.handleLogin()} variant="outlined">Sign In Witth Google</Button>
          </Box>
        </Box>
      </>
    );
  }
}
export default withRouter(LogIn);
