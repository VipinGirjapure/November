import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import MoreIcon from "@mui/icons-material/MoreVert";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Component } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Drawer,
  Typography,
} from "@mui/material";
import "./Navbar.css";
import Main from "../Main/Main";
import { Link } from "react-router-dom";
import withRouter from "../WithRouter";
import TopSuggestionsBoxes from "../TopSuggestionsBoxes/TopSuggestionsBoxes";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      searchData: [],
      singleVideoData: [],

      id: "",
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
  handleDisplayData = async (ITEM) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ITEM.id}&key=AIzaSyDMmctVSAiVJesrluNeE7ZjVIuad8d0Fdc`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => this.setState({ singleVideoData: result.item }))
        .then(() => {
          console.log(ITEM);
          this.props.navigate(`/watch/${ITEM.id}`, { state: ITEM });
        });
    } catch (error) {
      console.log("error", error);
    }
  };

 
  render() {
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
                <Box sx={{textDecoration:"none",color:"white"}}>Home</Box>
            </Link>
              </Box>

            <Box className="drawer-item">
              {" "}
              <SubscriptionsIcon />
              <Box>Subscriptions</Box>
            </Box>
          </Box>
        </Drawer>
        <TopSuggestionsBoxes />
        <Box sx={{ flexGrow: 1 }}>
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
                  style={{ marginRight: "-2px" }}
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
                    height: "45px",
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
                  // onClick={handleProfileMenuOpen}
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

        <Box sx={{ height: "50vh" }} className="navbar-page">
          {this.state.searchData.length != 0 ? (
            this.state.searchData.map((item, i) => {
              return (
                <>
                  <Card
                    key={i}
                    className="card-container"
                    sx={{ maxWidth: 345 }}
                    onClick={() => this.handleDisplayData(item)}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="210"
                        image={item.snippet.thumbnails.medium.url}
                        alt="green iguana"
                      />
                      <CardContent
                        sx={{ backgroundColor: "black", color: "white" }}
                      >
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                        >
                          {item.snippet.title}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            alt="User Profile"
                            src="https://i.pinimg.com/originals/74/0c/cf/740ccf06f16dfaad10f8c61c4eb8fa96.jpg"
                          />
                          <Box
                            ml={2}
                            sx={{ fontWeight: "bold", fontSize: "17px" }}
                          >
                            {item.snippet.channelTitle}
                          </Box>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </>
              );
            })
          ) : (
            <Main />
          )}
        </Box>
      </>
    );
  }
}
export default withRouter(Navbar);
