import { Box, Typography } from "@mui/material";
import { Component } from "react";
import withRouter from "../../Components/withRoter";
import TemplateOne from "../../Images/template1.png";
import TemplateTwo from "../../Images/template2.png";
import "./ChooseTemplate.css";
class ChooseTemplate extends Component {
  render() {
    return (
      <>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Templates
        </Typography>
        <Box className="template-container">
          <img
            src={TemplateOne}
            alt="template1"
            onClick={() => this.props.navigate("/editing/template1")}
          />
          <img
            src={TemplateTwo}
            alt="template2"
            onClick={() => this.props.navigate("/editing/template2")}
          />
        </Box>
        <Box></Box>
      </>
    );
  }
}

export default withRouter(ChooseTemplate);
