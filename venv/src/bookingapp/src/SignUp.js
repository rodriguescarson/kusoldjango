import React, { useState } from "react";
import { Grid, Box, InputAdornment, Typography, Button, withStyles, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { PropTypes } from 'prop-types'
import VisibilityIcon from '@material-ui/icons/Visibility';
import OAuthSignIn from './OAuthSignIn';
import AlertDialogSlide from "./TermsAndCondition";
import AdminHeader from "./components/Header/Header";
import axios from 'axios';

const styles = {
    root: {
        flexGrow: 1,
    },
    forms: {
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        flexDirection: "column",
    },
    box: {
        width: 500,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderColor: 'red',
        border: '1',
    },
    txt: {
        margin: '5',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    trial: {
        flexGrow: 1
    },
};

function TermsAndCond() {
    return (
        <div>
            <FormControlLabel
                control={<Checkbox
                    inputProps={{
                        'aria-label': 'secondary checkbox'
                    }}
                />}
                label={<AlertDialogSlide />}
            />
        </div>
    )
}


function SignUp(props) {
    const { classes } = props;
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contact, setContact] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [username, setUsername] = useState("");


    function handleCreate(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body:
                JSON.stringify({
                    username,
                    email,
                    password,
                    fname,
                    lname,
                    contact,
                    businessName
                })
        }).then((res) => {

            return res.json()
        })
            .then((res) => {
                alert("usercreated!");
            }).catch((error) => {
                alert('There was an error! Please re-check your form.' + error);
            });
    }

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
            <Button color="inherit" href="/signin" variant="outlined">Login</Button>
        </Toolbar>
    </AppBar><br /> */}
            <AdminHeader purpose="Sign In" h="/signin" />
            <Box className={classes.box} m="auto" p={3} sx={{ boxShadow: 5 }}>
                <Typography variant="h4" align="center">
                    Sign Up
                </Typography> <br />
                <form className={classes.forms} onSubmit={(event) => handleCreate(event)}>

                    <Grid container direction={'row'} spacing={2}>
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <TextField id="standard-basic" onChange={e => setFName(e.target.value)}
                                label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <TextField onChange={e => setLName(e.target.value)}
                                id="standard-basic" label="Last Name" variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <TextField label="Email Id" onChange={e => setEmail(e.target.value)}
                        type="email" variant="outlined" fullWidth /> <br />

                    <TextField label="Username" onChange={e => setUsername(e.target.value)}
                        type="username" variant="outlined" fullWidth /> <br />
                    <TextField
                        onChange={e => setPassword(e.target.value)}
                        id="standard-adornment-password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <VisibilityIcon />
                                </InputAdornment>
                            ),
                        }}
                    /> <br />
                    <TextField
                        variant='outlined'
                        id="standard-adornment-password"
                        label="Confirm Password"
                        type="password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <VisibilityIcon />
                                </InputAdornment>
                            ),
                        }}
                    /> <br />
                    <Grid container direction={'row'} spacing={4}>
                        <Grid item>
                            <TextField label="Contact Number" onChange={e => setContact(e.target.value)} variant='outlined' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                        </Grid>
                        <Grid item>
                            <TextField id="standard-basic" onChange={e => setBusinessName(e.target.value)} label="Business Name" variant="outlined" />
                        </Grid>
                    </Grid>
                    <br />
                    <TermsAndCond />
                    <br />
                    <div align="center">
                        <Button type="submit" variant="contained" color="primary">

                            Submit
                        </Button>

                    </div>

                </form>
            </Box>
            <Typography variant="h5" align="center">
                Or <br />
                Sign Up Using... <br />
            </Typography> <br /> <br />
            <OAuthSignIn />
        </div>
    )
}
SignUp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
