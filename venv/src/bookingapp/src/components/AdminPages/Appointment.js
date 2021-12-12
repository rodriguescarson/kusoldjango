import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Grid, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import AdminHeader from "../Header/AdminHeader";

const drawerWidth = 300;
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
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
    { field: "id", headerName: "ID" },
    {
        field: "employeeId",
        headerName: "employeeId",
        width: 150,
        editable: true
    },
    {
        field: "customerId",
        headerName: "customerId",
        width: 150,
        editable: true
    },
    {
        field: "location",
        headerName: "location",
        width: 150,
        editable: true
    },
    {
        field: "mode",
        headerName: "mode",
        width: 150,
        editable: true
    },
    {
        field: "calenderId",
        headerName: "calenderId",
        width: 150,
        editable: true
    },
    {
        field: "status",
        headerName: "status",
        width: 150,
        editable: true
    },
    {
        field: "appointmentAt",
        headerName: "appointmentAt",
        width: 150,
        editable: true
    },

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

export default function Appointment() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory()


    const [employeeId, setEmployeeId] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [location, setLocation] = useState("");
    const [mode, setMode] = useState("");
    const [calenderId, setCalenderId] = useState("");
    const [status, setStatus] = useState("");
    const [appointmentAt, setAppointmentAt] = useState("");

    const [rows, setRows] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        fetch("http://127.0.0.1:8000/api/createAppointment", {
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
    }

    function handleCreate(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/createAppointment", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body:
                JSON.stringify({
                    employeeId,
                    customerId,
                    location,
                    mode,
                    calenderId,
                    status,
                    appointmentAt
                })
        }).then((res) => { return res.json() })
            .then((res) => {

                handleClose()
                alert("Appointment Created!");
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
                            Appointment
                        </Typography>
                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<PersonAddIcon />}
                            onClick={handleClickOpen}
                        >
                            New Appointment
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
                                            <TextField id="standard-basic" onChange={e => setCustomerId(e.target.value)}
                                                label="Customer Id" variant="outlined" />
                                        </Grid>
                                        <Grid item xl={6} md={6} sm={12} xs={12}>
                                            <TextField id="standard-basic" onChange={e => setEmployeeId(e.target.value)}
                                                label="EmployeeId" variant="outlined" />

                                        </Grid>
                                    </Grid>
                                    <br />
                                    <TextField onChange={e => setLocation(e.target.value)}
                                        label="Location" variant="outlined" fullWidth />
                                    <br />
                                    <TextField label="Mode" onChange={e => setMode(e.target.value)}
                                        type="mode" variant="outlined" fullWidth /> <br />
                                    <TextField label="calenderId" onChange={e => setCalenderId(e.target.value)}
                                        type="calenderId" variant="outlined" fullWidth /> <br />

                                    <TextField label="status" onChange={e => setStatus(e.target.value)}
                                        type="status" variant="outlined" fullWidth /> <br />

                                    <TextField label="Appointment At" onChange={e => setAppointmentAt(e.target.value)}
                                        type="appointmentAt" variant="outlined" fullWidth /> <br />


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
