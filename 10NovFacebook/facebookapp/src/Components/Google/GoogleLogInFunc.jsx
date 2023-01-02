import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Modal, TextField, Typography } from "@mui/material";
import GoogleCalendorShow from "./GoogleCalendorShow";

const CLIENT_ID =
  "1098141659964-hqgujgbs1pisun5h4d16ejg5r6p9fpib.apps.googleusercontent.com";
// const SCOPES =
//   "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly";
const GoogleLogInFunc = () => {
  const [isLogIn, setIsLogIN] = useState(false);
  const [open, setOpen] = useState(false);
  const [titleEvent, setTitleEvent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [profile, setProfile] = useState(null);
  const [logInOutNote, setLogInOutNote] = useState("");
  const [events, setEvents] = useState([]);
  const onSuccess = (resp) => {
    console.log("success:", resp);
    if (resp.googleId) {
      setProfile(resp.profileObj);
      setIsLogIN(true);
      authenticate().then(loadClient());
    }
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };
  const logOut = () => {
    setLogInOutNote("successfully logged out!");
    console.log("successfully logged out!");
    setIsLogIN(false);
    setProfile(null);
    setEvents([]);
  };

  function authenticate() {
    return gapi.auth2
      .getAuthInstance()
      .signIn({
        scope:
          "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly",
      })
      .then(
        function () {
          console.log("Sign-in successful");
          execute();
        },
        function (err) {
          console.error("Error signing in", err);
        }
      );
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyDMmctVSAiVJesrluNeE7ZjVIuad8d0Fdc");
    return gapi.client
      .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(
        function (response) {
          console.log("GAPI client loaded for API", response);
        },
        function (err) {
          console.error("Error loading GAPI client for API", err);
        }
      );
  }

  function execute() {
    return gapi.client.calendar.events
      .list({
        calendarId: "vipingirjapure@gmail.com",
      })
      .then(
        function (response) {
          console.log("Response", response.result.items);
          setEvents(response.result.items);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: CLIENT_ID });
  });

  function executeAdd() {
    handleClose();
    return gapi.client.calendar.events
      .insert({
        calendarId: "vipingirjapure@gmail.com",
        sendNotifications: true,
        sendUpdates: "all",
        supportsAttachments: true,
        resource: {
          end: {
            date: endDate,
            timeZone: "Asia/Kolkata",
          },
          start: {
            date: startDate,
            timeZone: "Asia/Kolkata",
          },
          originalStartTime: {
            date: "2022-11-11",
          },
          summary: titleEvent,
        },
      })
      .then(
        function (response) {
          console.log("Response", response);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
 
  function executeDelete(ID) {
    // console.log(ID)
    return gapi.client.calendar.events
      .delete({
        calendarId: "vipingirjapure@gmail.com",
        eventId: `${ID}`,
      })
      .then(
        function (response) {
          console.log("ResponseD", response);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <Typography color="green">{logInOutNote}</Typography>

      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              flexDirection: "column",
              backgroundColor: "white",
              padding: "15px",
            }}
          >
            <Typography
              sx={{ margin: "15px" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              ADD EVENT
            </Typography>
            <TextField
              type="Text"
              placeholder="Title of Event"
              onChange={(e) => setTitleEvent(e.target.value)}
              sx={{ margin: "15px" }}
            />
            <TextField
              type="datetime-local"
              placeholder="Start"
              onChange={(e) => setStartDate(e.target.value)}
              sx={{ margin: "15px" }}
            />
            <TextField
              type="datetime-local"
              placeholder="End"
              onChange={(e) => setEndDate(e.target.value)}
              sx={{ margin: "15px" }}
            />

            <Button
              variant="outlined"
              sx={{ m: 2 }}
              onClick={() => executeAdd()}
            >
              Add Events
            </Button>
            <Button sx={{ m: 2 }} onClick={() => setOpen(!open)}>
              close
            </Button>
          </Box>
        </Box>
      </Modal>
      {isLogIn && profile !== null ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItem: "center",
              //   height: "100%",

              flexDirection: "column",
              border: "1px solid black",
              padding: "8px 15px",
              marginTop: "5px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "green", textAlign: "center" }}
              mb={5}
            >
              Google Info
            </Typography>
            <img
              src={profile.imageUrl}
              alt="url"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                alignSelf: "center",
              }}
            />{" "}
            <Typography variant="body2" mt={2} mb={2}>
              NAME: {profile.givenName} {profile.familyName}
            </Typography>
            <Typography variant="body2">EMAIL : {profile.email} </Typography>
            {isLogIn ? (
              <Button variant="outlined" onClick={() => handleOpen()}>
                ADD EVENT
              </Button>
            ) : null}
            <Button variant="outlined" mt={2} onClick={() => execute()}>
              Get Events
            </Button>
            <Button
              variant="outlined"
              sx={{ m: 2 }}
              onClick={() => executeDelete()}
              color="error"
            >
              Delete Event
            </Button>
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={logOut}
            />
          </Box>
        </>
      ) : (
        <GoogleLogin
          clientId="1098141659964-hqgujgbs1pisun5h4d16ejg5r6p9fpib.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
          onClick={() => authenticate().then(loadClient)}
          autoLoad={false}
        />
      )}

      {events.length !== 0 ? (
        <Typography
          color="blue"
          sx={{
            width: "90%",
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          EVENTS LIST
        </Typography>
      ) : null}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          flexWrap: "wrap",
          width: "90%",
          border: "1px solid grey",
        }}
      >
        {events.length !== 0
          ? events.map((item, i) => {
              return (
                <ul
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    // backgroundColor:`${item.backgroundColor}`
                  }}
                >
                  <li>{item.summary}</li>
                </ul>
              );
            })
          : null}
      </Box>
      <GoogleCalendorShow events={events} isLogIn={isLogIn} executeDelete={executeDelete} />
    </>
  );
};

export default GoogleLogInFunc;
