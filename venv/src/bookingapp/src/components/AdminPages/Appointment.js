import React, { useState } from "react";
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
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "title",
        headerName: "Title",
        width: 150,
        editable: true
    },
    {
        field: "body",
        headerName: "Body",
        width: 150,
        editable: true
    },
    {
        field: "appointmentAt",
        headerName: "Appointment At",
        width: 200,
        editable: true
    }
];

const rows = [
    {
        title: "Allegery",
        body: "Rash",
        appointmentAt: "2021-11-09",
        id: 1
    },
    {
        title: "Alleger",
        body: "Rash",
        appointmentAt: "2021-11-09",
        id: 2
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

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [appointmentAt, setAppointmentAt] = useState("");

    function handleCreate(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body:
                JSON.stringify({
                    title,
                    body,
                    appointmentAt
                })
        }).then((res) => { return res.json() })
            .then((res) => {
                alert("usercreated!");
                history.push('http://localhost:3000/appointment');
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
                                    <form className={classes.forms} onSubmit={(event) => handleCreate(event)}>

                                        <Grid container direction={'row'} spacing={2}>
                                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                                <TextField id="standard-basic" onChange={e => setTitle(e.target.value)}
                                                    label="Title" variant="outlined" />
                                            </Grid>
                                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                                <TextField onChange={e => setBody(e.target.value)}
                                                    id="standard-basic" label="Body" variant="outlined" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <TextField label="Appointment At" onChange={e => setAppointmentAt(e.target.value)}
                                            type="appointmentAt" variant="outlined" fullWidth /> <br />
                                    </form>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} variant="contained" color="primary">Submit</Button>
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
