import { UserContext } from '../../App'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import AdminHeader from "../Header/AdminHeader";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Grid, TextField } from '@material-ui/core';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const drawerWidth = 300;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingLeft: theme.spacing(40),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "organization",
        headerName: "organization",
        width: 150,
        editable: true
    },
    {
        field: "position",
        headerName: "position",
        width: 150,
        editable: true
    },
    {
        field: "interests",
        headerName: "interests",
        width: 200,
        editable: true
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2)
    },
    content: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
}));

export default function Customer() {

    const { state, dispatch } = useContext(UserContext)

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory()
    const [organization, setOrganization] = useState("");
    const [position, setPosition] = useState("");
    const [interests, setInterests] = useState("");

    const [rows, setRows] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        fetch("http://127.0.0.1:8000/api/createCustomer", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then((res) => { return res.json() })
            .then((res) => {
                console.log(res);
                res = res.map(function (obj, i) {
                    obj['id'] = i; // Assign new key
                    return obj;
                });
                setRows(res);
            }).catch((error) => {
                alert('There was an error! Please re-check your form.' + error);
            });

        fetch("http://127.0.0.1:8000/api/user", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": "Token " + cookies.get("jwt")
            }
        }).then((res) => { return res.json() })
            .then((res) => {
                console.log(res);
            }).catch((error) => {
                alert('There was an error! Please re-check your form.' + error);
            });

    }


    function handleCreate(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/createCustomer", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body:
                JSON.stringify({
                    organization,
                    position,
                    interests
                })
        }).then((res) => { return res.json() })
            .then((res) => {
                handleClose();
                alert("Customer created!");
            }).catch((error) => {
                alert('There was an error! Please re-check your form.' + error);
            });
    }



    return (
        <div className={classes.root}>
            <AdminHeader />
            <Main className="main">

                <Paper className={classes.content}>
                    <div className={classes.toolbar}>
                        <Typography variant="h6" component="h2" color="primary">
                            Customer
                        </Typography>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClickOpen}
                            startIcon={<PersonAddIcon />}
                        >
                            New Customer
                        </Button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Create Appointment"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    <Grid container direction={'row'} spacing={2}>
                                        <Grid item xl={6} md={6} sm={12} xs={12}>
                                            <TextField id="standard-basic" onChange={e => setOrganization(e.target.value)}
                                                label="organization" variant="outlined" />
                                        </Grid>
                                        <Grid item xl={6} md={6} sm={12} xs={12}>
                                            <TextField onChange={e => setPosition(e.target.value)}
                                                id="standard-basic" label="position" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <TextField label="interests" onChange={e => setInterests(e.target.value)}
                                        type="interests" variant="outlined" fullWidth /> <br />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button type="submit" variant="contained" color="primary" onClick={(event) => handleCreate(event)}>Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid rows={rows} columns={columns} checkboxSelection />
                    </div>
                </Paper>
            </Main>
        </div>
    );
}