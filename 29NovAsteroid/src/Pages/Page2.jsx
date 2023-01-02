import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

function Page2() {
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.result);

  const backHome = () => {
    navigate("/", {
      state: "",
    });
  };

  return (
    <>
      <Grid align="center" sx={{ marginTop: "15%" }}>
        <Box
        //   sx={{
        //     border: "2px solid",
        //     width: "50%",
        //   }}
        >
          <Typography variant="h5" data-testid="name">
            Name = {location.state.result.name}
          </Typography>
          <Typography variant="h5" data-testid="url">
            nasa_jpl_url = {location.state.result.nasa_jpl_url}
          </Typography>
          <Typography variant="h5" data-testid="hazardous">
            {" "}
            is_potentially_hazardous_asteroid ={" "}
            {location.state.result.is_potentially_hazardous_asteroid.toString()}
          </Typography>{" "}
        </Box>
        <Button
          variant="contained"
          onClick={backHome}
          data-testid="backBtn"
          sx={{ marginTop: "2%" }}
        >
          Back
        </Button>
      </Grid>
    </>
  );
}

export default Page2;
