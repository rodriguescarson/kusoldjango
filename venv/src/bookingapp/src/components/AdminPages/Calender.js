import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import AdminHeader from "../Header/AdminHeader";

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

export default function Calender() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AdminHeader />
            <Main className="main">

                <Paper className={classes.content}>
                    <div className={classes.toolbar}>
                        <Typography variant="h6" component="h2" color="primary">
                            Calender
                        </Typography>
                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<PersonAddIcon />}
                        >
                            New User
                        </Button>
                    </div>
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid rows={rows} columns={columns} checkboxSelection />
                    </div>
                </Paper>
            </Main>
        </div>
    );
}
