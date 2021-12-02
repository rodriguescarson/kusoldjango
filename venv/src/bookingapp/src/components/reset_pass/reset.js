import {
  Grid,
  Box,
  InputAdornment,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  withStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Menu,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MenuIcon from "@material-ui/icons/Menu";
// import OAuthSignIn from './OAuthSignIn';

const styles = {
  box: {
    width: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
};

function Reset(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction={"row"}
            className={classes.trial}
            spacing={3}
          >
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h4" align="center" m="auto">
                'O'ppointment
              </Typography>
            </Grid>
          </Grid>
          <Button
            color="inherit"
            variant="outlined"
            style={{ minWidth: "180px" }}
            href="/signup"
          >
            Create Account
          </Button>
        </Toolbar>
      </AppBar>
      <br />
      <Box p={3} m="auto" className={classes.box}>
        <Typography variant="h4" align="center">
          Reset Password
        </Typography>{" "}
        <br />
        <form className={classes.form}>
          <Grid container direction={"column"} spacing={2}>


            <Grid item>
              <TextField
                id="standard-adornment-password"
                label="New Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Confirm New Password"
                type="Password"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item align="center">
              <Button type="submit" href="/signin" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <br /> <br />
    </div>
  );
}

export default withStyles(styles)(Reset);
