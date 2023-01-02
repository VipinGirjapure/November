import { Box } from "@mui/material";
import { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <>
        <Box className="header-container">
          <Box>CHATapp</Box>
        </Box>
      </>
    );
  }
}

export default Header;
