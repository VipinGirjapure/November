import { Box, Typography } from "@mui/material";
import { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <Box className="footer">
          <Typography variant="body2" color="white" ml={2}>
          © 2022 Resume.com. All rights reserved.
          </Typography>
          <Box className="footer-items">
            <Box> <img
              src="https://tse1.mm.bing.net/th?id=OIP.xUT1zM0rLbM-IxoaD_SI9wHaBZ&pid=Api&P=0"
              alt="title"
              className="logo"
            /></Box>
           
          </Box>
        </Box>
      </>
    );
  }
}

export default Footer;
