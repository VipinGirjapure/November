import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Page1() {
  const [loading, setLoading] = useState(false);
  const [astroid, setAstroid] = useState("");
  let navigate = useNavigate();

  const apiKey = "0cDupsui0V2X1B412ivprzPhKjMAHazLgzlsVICV";

  const astroidApi = (id) => {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`;
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        // console.log("result", result);
        navigate("/page2", {
          state: { result },
        });
      })
      .catch((e) => console.log("Please Enter Valid Astroid", e));
  };

  const randomAstroid = () => {
    setLoading(true);
    const urlkey = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`;
    fetch(urlkey)
      .then((resp) => resp.json())
      .then((res) => {
        let item =
          res.near_earth_objects[
            Math.floor(Math.random() * res.near_earth_objects.length)
          ];

        astroidApi(item.id);
      })
      .catch((e) => console.log("error", e));
  };

  return (
    <Grid align="center" sx={{ marginTop: "15%" }}>
      <TextField
        data-testid="asteroidId"
        placeholder="Enter Astroid Id"
        value={astroid}
        onChange={(e) => setAstroid(e.target.value)}
      />
      <br />

      <Button
        data-testid="submitBtn"
        sx={{ margin: "2%" }}
        variant="contained"
        onClick={() => astroidApi(astroid)}
        disabled={astroid.length <= 1}
      >
        Submit
      </Button>
      <br />

      <Button
        variant="contained"
        onClick={randomAstroid}
        data-testid="randomId"
      >
        Random Astroid
      </Button>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        {loading && <CircularProgress color="inherit" data-testid="loader" />}
      </Backdrop>
    </Grid>
  );
}

export default Page1;
