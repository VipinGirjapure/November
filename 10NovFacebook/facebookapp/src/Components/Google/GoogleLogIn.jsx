import { Component } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { Box } from "@mui/system";
const clientId =
  "1098141659964-hqgujgbs1pisun5h4d16ejg5r6p9fpib.apps.googleusercontent.com";
class GoogleLogIn extends Component {
  constructor() {
    super();
    this.state = {
      isLogIn: false,
      resp: {},
    };
  }
  onSuccess = (resp) => {
    console.log("success:", resp);
    if (resp.googleId);
    this.setState({
      isLogIn: true,
      resp: resp,
    });
  };
  onFailure = (err) => {
    console.log("failed:", err);
  };
  componentDidMount() {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }
  render() {
    return (
      <>
        {/* <button >This is my custom Google button</button> */}
        {this.state.isLogIn ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              height: "30vh",
              width: "30vw",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            <Box>NAME: {this.state.profilObj.givenname}</Box>
            <Box>EMAIL : {this.state.resp.familyName}</Box>
            <img
              src={this.state.resp.picture.data.url}
              alt="url"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
          </Box>
        ) : (
          <GoogleLogin
            clientId="1098141659964-hqgujgbs1pisun5h4d16ejg5r6p9fpib.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            //   onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            onClick={this.onSuccess}
          />
        )}
      </>
    );
  }
}
export default GoogleLogIn;
