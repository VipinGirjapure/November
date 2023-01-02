import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
} from "@mui/material";
import {
  EmailPlaceholder,
  SignUpPageHeading,
  PasswordPlaceholder,
  SubmitButtonText,
  NamePlaceholder,
} from "./configure";

const SignUp = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: "50px" }}>
          <Typography component="h1" variant="h5">
            {SignUpPageHeading}
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={EmailPlaceholder}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label={NamePlaceholder}
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={PasswordPlaceholder}
            name="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            {SubmitButtonText}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"Already registered? Login here "}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
