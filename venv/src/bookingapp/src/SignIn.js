import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from './App'
import {
  Grid,
  Box,
  InputAdornment,
  Typography,
  Button,
  withStyles,
  TextField,
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import OAuthSignIn from "./OAuthSignIn";
import AdminHeader from "./components/Header/Header";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const styles = {
  box: {
    width: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
};

function SignIn(props) {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const PostData = (e) => {
    fetch("http://127.0.0.1:8000/api/login", {
      method: "post",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password,
        email,
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log(data.error)
          alert(data.error)
        }
        else {
          console.log(data.user)
          cookies.set("jwt", data.jwt, { path: "/" });
          cookies.set("user", JSON.stringify(data.user), { path: "/" });

          dispatch({ type: "USER", payload: data.user })

          console.log(data)
          history.push('/customers')
        }
      }).catch(err => console.log(err))
    e.preventDefault();
  }

  const { classes } = props;
  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar>
        <Grid container direction={'row'} className={classes.trial} spacing={3}>
        <Grid item>
          <IconButton edge="start" color="inherit" aria-label="menu" size="large">
              <MenuIcon />
          </IconButton>
          </Grid>
          <Grid item>
          <Typography variant="h4" align="center" m="auto">
            'O'ppointment
          </Typography>
          </Grid>
          </Grid>
          <Button color="inherit" href="/signup" variant="outlined" style={{minWidth:'180px'}}>Create Account</Button>
      </Toolbar>
  </AppBar><br /> */}
      <AdminHeader purpose="Sign Up" h="/SignUp" />

      <Box p={3} m="auto" className={classes.box}>
        <Typography variant="h4" align="center">
          Sign In
        </Typography>{" "}
        <br />
        <form className={classes.form} onSubmit={(event) => { PostData(event) }}>
          <Grid container direction={"column"} spacing={6}>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-adornment-password"
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item align="center">
              <Button
                type="submit"
                onClick={(event) => PostData(event)}
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </Grid>
            <Grid item align="center">
              <Button
                type="submit"
                href="/reset"
                variant="contained"
                color="primary"

              >
                Forgot Email id or Password ?
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Typography variant="h5" align="center">
        Or <br />
        Sign In With... <br />
      </Typography>{" "}
      <br /> <br />
      <OAuthSignIn />
    </div>
  );
}

export default withStyles(styles)(SignIn);