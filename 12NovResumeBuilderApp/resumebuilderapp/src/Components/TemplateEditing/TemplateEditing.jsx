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
import "./TemplateEditing.css";
import { connect } from "react-redux";
import { action } from "../../REDUX/Action/Action";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Authentification } from "../../Fireabse";
class TemplateEditing extends Component {
  constructor() {
    super();
    this.state = {
      isSubmit: true,
      firstName: "First",
      lastName: "Last",
      address: "Lorem ipsum dolor sit amet ",
      city: "Wardha",
      jobTitle: "Human Resource Manger",
      email: "test@test.com",
      number: "9876543210",
      googleFirstName:"FirstName",
      googleLastName:"LastName",
      googleImgUrl:"https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
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
  handleGoogleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(Authentification, provider)
      .then((resp) => {console.log(resp)
        this.setState({ googleFirstName: resp._tokenResponse.firstName, googleLastName: resp._tokenResponse.lastName,googleImgUrl: resp._tokenResponse.photoURL})})
      .catch((err) => console.log(err));
    };
    render() {
      
    return (
      <>
        <Box className="editing-component1">
          <Box className="editing-container1">
            <Box className="template">
              <Box className="template1-header">
                <img
                  // src={this.state.googleImgUrl}
                  src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
                  className="profile-photo"
                  alt="profile pic"
                />
                <Box className="name-designation">
                  <Box className="name">
                    <Box>
                      {this.props.State.reducer.inputData.firstName
                        ? this.props.State.reducer.inputData.firstName
                        : this.state.googleFirstName}
                    </Box>
                    <Box>
                      {this.props.State.reducer.inputData.lastName
                        ? this.props.State.reducer.inputData.lasttName
                        :this.state.googleLastName}{" "}
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
              <Box className="about1">
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
                    borderBottom: "5px solid orange",
                    fontSize: "21px",
                    color: "orange",
                  }}
                >
                  Professional Experience
                </Typography>
                <Box className="professional-experience-container">
                  <Box className="professional-experience-item">
                    <Box>
                      <Box className="experience-company-designation">
                        Human Resources Manager
                      </Box>
                      <Box className="experience-company-name">
                        Jim's Widget Factory, Plano, TX | January 2016 - Present
                      </Box>
                    </Box>
                    <Box>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                    </Box>
                  </Box>
                  <Box className="professional-experience-item">
                    <Box className="experience-company-designation">
                      Human Resources Associate
                    </Box>
                    <Box className="experience-company-name">
                      Jim's Widget Factory, Plano, TX | March 2015 - January
                      2016
                    </Box>
                    <Box>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarIcon sx={{ height: "12px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Implement effective company policies to ensure that all practices comply with labor and employment regulations" />
                      </ListItem>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="education">
                <Typography
                  sx={{
                    borderBottom: "5px solid orange",
                    fontSize: "21px",
                    color: "orange",
                  }}
                >
                  Education
                </Typography>
                <Box className="experience-company-designation">
                  Masters in Human Resources
                </Box>
                <Box className="college-name">
                  The University of Texas at Dallas | September 2007 - May 2011
                </Box>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon sx={{ height: "12px" }} />
                  </ListItemIcon>
                  <ListItemText primary="Academic Awardee of AY 2007-2008" />
                </ListItem>
              </Box>
            </Box>
            <Box className="add-information-box">
              <Typography variant="h5" color="orange">
                Contact Information
              </Typography>

              <TextField
                type="text"
                id="standard-basic"
                label="First Name"
                variant="standard"
                onChange={(e) =>
                  this.setState({ firstName: e.target.value, isSubmit: false })
                }
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
              <Button onClick={() => this.handleGoogleLogIn()}>
                GOOGLE LOG IN
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
export default connect(mapStateToProps, mapDispatchToProps)(TemplateEditing);
