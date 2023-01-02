import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import withRouter from "../WithRouter";

import "./Main.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPageData: [],
      singleVideoData: [],
      singleVideo: false,
    };
  }

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
  componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=36&regionCode=IN&key=AIzaSyDMmctVSAiVJesrluNeE7ZjVIuad8d0Fdc",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ landingPageData: result.items }))
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <>
        <Box className="main-page">
          {this.state.landingPageData.length !== 0
            ? this.state.landingPageData.map((item, i) => {
                return (
                  <>
                    <Card
                      key={i}
                      className="card-container"
                      sx={{ maxWidth: 348 }}
                      onClick={() => this.handleDisplayData(item)}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          width="320"
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
            : "Videos are loading..."}
        </Box>
      </>
    );
  }
}
export default withRouter(Main);
