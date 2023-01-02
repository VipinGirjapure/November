import {
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { Component } from "react";
import "./Template2Editing.css";
import { connect } from "react-redux";
import { action } from "../../REDUX/Action/Action";
class Template2Editing extends Component {
  constructor() {
    super();
    this.state = {
      isSubmit:true,
      firstName: "FIRST",
      lastName: "LASTNAME",
      address: "Lorem ipsum dolor sit amet ",
      city: "Wardha",
      jobTitle: "Human Resource Manger",
      email: "test@test.com",
      number: "9876543210",
    };
  }
  handleSubmit = () => {
    this.props.action({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      jobTitle: this.state.jobTitle,
      email: this.state.email,
      number: this.state.number,
    });
  };
  render() {
    console.log(this.props.State.reducer.inputData);
    return (
      <>
        <Box className="editing-component">
          <Box className="editing-container">
            <Box className="template">
              <Box className="template-header">
                <img
                  src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
                  className="profile-photo"
                  alt="profile"
                />
                <Box className="name-designation">
                  <Box className="name">
                    <Box>
                      {this.props.State.reducer.inputData.firstName
                        ? this.props.State.reducer.inputData.firstName
                        : "FirstName"}
                    </Box>
                    <Box>
                      {this.props.State.reducer.inputData.lastName
                        ? this.props.State.reducer.inputData.firstName
                        : "LastName"}{" "}
                    </Box>
                  </Box>
                  <Box className="designation">
                    {this.props.State.reducer.inputData.jobTitle
                      ? this.props.State.reducer.inputData.jobTitle
                      : "Human Resource Manger"}
                  </Box>
                </Box>

                <Box className="address">
                  <Box>
                    {this.props.State.reducer.inputData.address
                      ? this.props.State.reducer.inputData.address
                      : "Lorem ipsum dolor sit amet"}
                  </Box>
                  <Box>
                    {this.props.State.reducer.inputData.city
                      ? this.props.State.reducer.inputData.city
                      : "Wardha"}
                  </Box>
                  <Box>
                    {this.props.State.reducer.inputData.email
                      ? this.props.State.reducer.inputData.email
                      : "test@test.com"}
                  </Box>
                  <Box>
                    {this.props.State.reducer.inputData.number
                      ? this.props.State.reducer.inputData.number
                      : "9876543210"}
                  </Box>
                </Box>
              </Box>
              <Box className="about">
                Human resources generalist with 8 years of experience in HR,
                including hiring and terminating, disciplining employees and
                helping department managers improve employee performance. Worked
                with labor unions to negotiate compensation packages for
                workers. Organized new hire training initiatives as well as
                ongoing training to adhere to workplace safety standards. Worked
                with OSHA to ensure that all safety regulations are followed.
              </Box>
              <Box className="professional-experience">
                <Typography
                  sx={{
                    borderBottom: "3px solid #b2436f",
                    fontSize: "21px",
                    textAlign: "left",
                    color: "#b2436f",
                  }}
                >
                  Professional Experience
                </Typography>
                <Box className="professional-experience-container">
                  <Box className="professional-experience-item">
                    <Box sx={{ display: "flex" }}>
                      <Box className="experience-company-name">
                        January 2016 - Present
                      </Box>
                      <Box>
                        <Box className="experience-company-designation">
                          Human Resources Manager{" "}
                          <Box
                            sx={{
                              color: "color",
                              fontSize: "small",
                              fontWeight: "lighter",
                              marginLeft: "5px",
                            }}
                          >
                            Jim's Widget Factory, Plano, TX |{" "}
                          </Box>
                        </Box>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="professional-experience-item">
                    <Box sx={{ display: "flex" }}>
                      <Box className="experience-company-name">
                        March 2015 - January 2016
                      </Box>
                      <Box>
                        <Box className="experience-company-designation">
                          Human Resources Associate{" "}
                          <Box
                            sx={{
                              color: "color",
                              fontSize: "small",
                              fontWeight: "lighter",
                              marginLeft: "5px",
                            }}
                          >
                            Jim's Widget Factory, Plano, TX |{" "}
                          </Box>
                        </Box>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon
                              sx={{ height: "12px", color: "#b2436f" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            sx={{ color: "grey" }}
                          />
                        </ListItem>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="education">
                <Typography
                  sx={{
                    borderBottom: "3px solid #b2436f",
                    fontSize: "21px",
                    color: " #b2436f",
                  }}
                >
                  Education
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Box>September 2007 - May 2011</Box>

                  <Box>
                    <Box className="experience-company-designation">
                      Masters in Human Resources{" "}
                      <Box
                        sx={{
                          fontSize: "14px",
                          color: "grey",
                          fontWeight: "lighter",
                          marginLeft: "2px",
                        }}
                      >
                        The University of Texas at Dallas
                      </Box>
                    </Box>
                    <ListItem>
                      <ListItemIcon>
                        <StarIcon sx={{ height: "12px", color: "#b2436f" }} />
                      </ListItemIcon>
                      <ListItemText primary="Academic Awardee of AY 2007-2008" />
                    </ListItem>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="add-information-box">
              <Typography variant="h5" color="#b2436f">
                Contact Information
              </Typography>

              <TextField
                type="text"
                id="standard-basic"
                label="First Name"
                variant="standard"
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
              <TextField
                type="text"
                id="standard-basic"
                label="Last Name"
                variant="standard"
                onChange={(e) => this.setState({ lastName: e.target.value })}
              />
              <TextField
                type="text"
                id="standard-basic"
                label="Job Title"
                variant="standard"
                onChange={(e) => this.setState({ jobTitle: e.target.value })}
              />
              <TextField
                type="text"
                id="standard-basic"
                label="Address"
                variant="standard"
                onChange={(e) => this.setState({ address: e.target.value })}
              />
              <TextField
                type="text"
                id="standard-basic"
                label="City"
                variant="standard"
                onChange={(e) => this.setState({ city: e.target.value })}
              />
              <TextField
                type="text"
                id="standard-basic"
                label="Email"
                variant="standard"
                onChange={(e) => this.setState({ email: e.target.value })}
              />

              <Button
                disabled={this.state.isSubmit}
                onClick={() => this.handleSubmit()}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (State) => ({
  State: State,
});
const mapDispatchToProps = {
  action: action,
};
export default connect(mapStateToProps, mapDispatchToProps)(Template2Editing);
