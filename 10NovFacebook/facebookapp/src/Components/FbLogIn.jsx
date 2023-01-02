import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

import FacebookLogin from "react-facebook-login";
import GoogleLogInFunc from "./Google/GoogleLogInFunc";

class FbLogIn extends Component {
  constructor() {
    super();
    this.state = {
      isLogIn: false,
      resp: {},
    };
  }
  responseFb = (response) => {
    if (response.userId);
    this.setState({
      isLogIn: true,
      resp: response,
    });
  };
  componentClicked = () => {};
  render() {
    return (
      <>
        {this.state.isLogIn ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItem: "center",
                // height: "250px",
                // width: "200px",
                flexDirection: "column",
                border: "1px solid black",
                borderRadius: "15px",
                padding: "15px",
              }}
            >
              <img
                src={this.state.resp.picture.data.url}
                alt="url"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  alignSelf: "center",
                }}
              />
              <Box>NAME: {this.state.resp.name}</Box>
              <Box>EMAIL : {this.state.resp.email}</Box>
              <Button onClick={() => this.setState({ isLogIn: false })}>
                Log Out
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            //   height: "500px",
              flexDirection: "column",
            }}
          >
            <FacebookLogin
              appId="681523170212627"
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFb}
              className="my-facebook-button-class"
              icon="fa-facebook"
            />
            <GoogleLogInFunc />
          </Box>
        )}
      </>
    );
  }
}
export default FbLogIn;
