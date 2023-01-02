import { Box } from "@mui/system";
import { Component } from "react";
import "./TopSuggestionsBoxes.css"
class TopSuggestionsBoxes extends Component {
  render() {
    return (
      <>
        <Box className="top-suggestions-boxes">
          <Box className="top-suggestions-boxes-item" sx={{backgroundColor:"white",color:"black"}}>All</Box>
          <Box className="top-suggestions-boxes-item">Mixes</Box>
          <Box className="top-suggestions-boxes-item">Music</Box>
          <Box className="top-suggestions-boxes-item">Cricket</Box>
          <Box className="top-suggestions-boxes-item">Football</Box>
          <Box className="top-suggestions-boxes-item">Dance</Box>
          <Box className="top-suggestions-boxes-item">Action</Box>
          <Box className="top-suggestions-boxes-item">Drama</Box>
          <Box className="top-suggestions-boxes-item">Movies</Box>
          <Box className="top-suggestions-boxes-item">Trailors</Box>
          <Box className="top-suggestions-boxes-item">Latest Songs</Box>
        
        </Box>
      </>
    );
  }
}
export default TopSuggestionsBoxes;
