import { useContext } from "react";
import { UserContext } from '../../App'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { styled } from '@mui/material/styles';
import AdminHeader from "../Header/AdminHeader";
import CalenderView from "./CalenderView";
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

export default function WorkingHours() {

    const classes = useStyles();
    const { state, dispatch } = useContext(UserContext)
    return (
        <div className={classes.root}>
            <AdminHeader />
            <Main className="main">

                <Paper className={classes.content}>
                    <div className={classes.toolbar}>
                        <Typography variant="h6" component="h2" color="primary">
                            Working Hours
                        </Typography>
                    </div>
                    <div style={{ height: 600, width: "100%" }}>
                        <CalenderView />
                    </div>
                </Paper>
            </Main>
        </div>
    );
}