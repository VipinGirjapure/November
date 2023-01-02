import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import withRouter from "../WithRouter";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDMmctVSAiVJesrluNeE7ZjVIuad8d0Fdc&textFormat=plainText&part=snippet&videoId=${
        this.props.location.state.id.videoId
          ? this.props.location.state.id.videoId
          : this.props.location.state.id
      }&maxResults=300&page`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ comments: result.items }))
      .catch((error) => console.log("error", error));
  }
  componentDidUpdate(prevState) {
    if (prevState.comments != this.state.comments) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDMmctVSAiVJesrluNeE7ZjVIuad8d0Fdc&textFormat=plainText&part=snippet&videoId=${
          this.props.location.state.id.videoId
            ? this.props.location.state.id.videoId
            : this.props.location.state.id
        }&maxResults=300&page`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => this.setState({ comments: result.items }))
        .catch((error) => console.log("error", error));
    }
  }
  render() {
    // console.log("comme", this.state.comments);
    // console.log("comments", this.props.location.state);

    return (
      <>
        <Box
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          {this.state.comments
            ? this.state.comments.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      color: "white",
                      marginLeft: "15px",
                      padding: "5px 0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Avatar
                        alt="User Profile"
                        src={
                          item.snippet.topLevelComment.snippet
                            .authorProfileImageUrl
                        }
                      />
                      <Box sx={{ fontSize: "18px", margin: "0 11px" }}>
                        {item.snippet.topLevelComment.snippet.authorDisplayName}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: "white",

                        marginLeft: "40px",
                        marginTop: "5px",
                        fontSize: "16px",
                      }}
                    >
                      {item.snippet.topLevelComment.snippet.textDisplay}
                    </Box>
                  </Box>
                );
              })
            : null}
        </Box>
      </>
    );
  }
}
export default withRouter(Comments);
