import { Box } from "@mui/system";
import { Component } from "react";
import React from "react";
import ReactPlayer from "react-player";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import withRouter from "../../Components/WithRouter";
import "./SingleVideo.css";
import { Avatar, Drawer,} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Comments from "../../Components/Comments/Comments";
import Main from "../../Components/Main/Main";
import { Link } from "react-router-dom";
import { ThumbDown } from "@mui/icons-material";
class SingleVideo extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      searchData: [],
      isDrawerOpen: false,
    };
  }
  handleSearch = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=36&q=${this.state.searchInput}&key=AIzaSyDMmctVSAiVJesrluNeE7ZjVIuad8d0Fdc`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ searchData: result.items }))
      .catch((error) => console.log("error", error));
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSearch();
    }
  };
  render() {
    console.log("single", this.props.location.state);
    return (
      <>
        <Drawer
          open={this.state.isDrawerOpen}
          onClose={() => this.setState({ isDrawerOpen: false })}
          sx={{
            width: 260,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
              backgroundColor: "#303030",
            },
          }}
          variant="persistent"
          anchor="left"
        >
          <Box className="drawer-container">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
                alt="Logo"
                width="90px"
                onClick={() => this.setState({ isDrawerOpen: false })}
              />
              <Box>
                YouTube{" "}
                <sup style={{ color: "grey", fontSize: "11px" }}>IN</sup>
              </Box>
            </Box>
            <Box className="drawer-item">
              <HomeIcon />
              <Link to="/">
                {" "}
                <Box sx={{ textDecoration: "none", color: "white" }}>Home</Box>
              </Link>
            </Box>

            <Box className="drawer-item">
              {" "}
              <SubscriptionsIcon />
              <Box>Subscriptions</Box>
            </Box>
          </Box>
        </Drawer>
        <Box sx={{ display: "flex", padding: "15px 0" }}>
          <AppBar position="fixed" sx={{ backgroundColor: "#303030" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => this.setState({ isDrawerOpen: true })}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex", lg: "flex", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  color: "whitesmoke",
                  fontWeight: "bold",
                  letterSpacing: "0.2px",
                  fontSize: "22px",
                }}
              >
                <img
                  src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
                  alt="Logo"
                  width="90px"
                  style={{ marginRight: "-2px", cursor: "pointer" }}
                  onClick={() => this.props.navigate("/")}
                />

                <Box>
                  YouTube{" "}
                  <sup style={{ color: "grey", fontSize: "15px" }}>IN</sup>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "flex", md: "flex" },
                    marginTop: { xs: "5px", md: "0" },
                    marginBottom: { xs: "-5px", md: "0" },
                    alignItems: "center",
                    border: "1px solid grey",
                    borderRadius: "15px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "15px !important",
                      fontSize: "18px",
                      color: "white",
                      border: "none",
                      outline: "none",
                      height: "45px",
                      background: "transparent",
                    }}
                    onChange={(e) =>
                      this.setState({ searchInput: e.target.value })
                    }
                    onKeyDown={this.handleKeyPress}
                  />
                  <SearchIcon
                    onClick={() => this.handleSearch()}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <IconButton
                  size="large"
                  aria-label="show 14 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={14}
                    color="error"
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="20pxs"
                  edge="end"
                  aria-label="account of current user"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  //   onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Avatar
                    alt="User Profile"
                    src="https://i.pinimg.com/originals/74/0c/cf/740ccf06f16dfaad10f8c61c4eb8fa96.jpg"
                  />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <img
                    src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
                    alt="Logo"
                    width="55px"
                    style={{ marginRight: "-2px", cursor: "pointer" }}
                  />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
{this.state.searchData.length===0 ? 
        <Box className="single-video-page">
          <ReactPlayer
            height="75vh"
            width="100%"
            controls
            url={`https://www.youtube.com/watch?v=${
              this.props.location.state.id.videoId
                ? this.props.location.state.id.videoId
                : this.props.location.state.id
            }`}
          />

          <Box
            sx={{
              backgroundColor: "black",
              width: "100%",
              margin: "0",

              fontSize: "22px",
              padding: "15px -15px 20px 5px",
              fontWeight: "bolder",
              color: "white",
            }}
          >
            {this.props.location.state.snippet.title}
            <Box
              sx={{
                padding: "5px",
                fontSize: "14px",
              }}
            >
              {/* {this.props.location.state.statistics.viewCount?"100K":null} Views */}
              11M views
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "80px",
              }}
            >
              <Avatar
                alt="User Profile"
                src="https://i.pinimg.com/originals/74/0c/cf/740ccf06f16dfaad10f8c61c4eb8fa96.jpg"
              />
              <Box ml={2} sx={{ fontWeight: "bold", fontSize: "19px" }}>
                {this.props.location.state.snippet.channelTitle}
              </Box>
            </Box>
            {/* <Box
              sx={{
                padding: "8px 12px",
                border: "1px solid grey",
                width: "fit-content",
                color: "red",
                borderRadius: "15px",
                marginTop: "10px",
              }}
            >
              Subscribe
            </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                flexWrap: "wrap",
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              <Box
                sx={{
                  margin: "0 10px",
                  padding: "5px",
                  border: "0.5px solid grey",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <ThumbUpIcon /> 125K
              </Box>
              <Box
                sx={{
                  margin: "0 10px",
                  padding: "5px",
                  border: "0.5px solid grey",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ThumbDown />
              </Box>
              <Box
                sx={{
                  margin: "0 10px",
                  padding: "5px",
                  border: "0.5px solid grey",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                Download
              </Box>
              <Box
                sx={{
                  margin: "0 10px",
                  padding: "5px",
                  border: "0.5px solid grey",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  cursor: "pointer",
                }}
              >
                Join
              </Box>
              <Box
                sx={{
                  margin: "0 10px",
                  padding: "5px",
                  border: "0.5px solid grey",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <ShareIcon /> Share
              </Box>
            </Box>

            <details>
              <summary
                style={{
                  width: "75%",
                  fontSize: "16px",
                  color: "white",
                  marginTop: "12px",
                  marginBottom: "5px",
                  textAlign: "left",
                }}
              >
                Video Description
              </summary>
              <p
                style={{ padding: "5px", textAlign: "left", fontSize: "14px" }}
              >
                {this.props.location.state.snippet.description}
              </p>
            </details>
          </Box>

          <Box className="comments-and-suggestion-section">
            <Box className="comments-and-suggestion-section-comments-comp">
              <Comments />
            </Box>
            <Box
              sx={{
                width: "35%",
                backgroundColor: "black",
                height: "fit-content",
              }}
              className="comments-and-suggestion-section-main-comp"
            >
              <Main />
            </Box>
          </Box>
        </Box> : <Main/>}
      </>
    );
  }
}
export default withRouter(SingleVideo);
