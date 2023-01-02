import { Box } from "@mui/material";
import { Component } from "react";
import withRouter from "../withRoter";
import "./Header.css";
class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <Box className="header">
          <Box onClick={()=> this.props.navigate('/')}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.xUT1zM0rLbM-IxoaD_SI9wHaBZ&pid=Api&P=0"
              alt="title"
              className="logo"
              
            />
          </Box>
          <Box className="header-items">
            <Box>My Resume</Box>
            <Box>Log In</Box>
            <Box>Sign-up</Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default withRouter(Header);
