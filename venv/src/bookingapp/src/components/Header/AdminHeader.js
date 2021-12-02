import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
const drawerWidth = 300;

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

function AdminHeader() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className="nav-bg">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        {open ? <></> : <MenuIcon />}
                    </IconButton>
                    <nav className="nav">
                        <div className="left">

                            <h3 className="nav-company" > 'O'ppointment</h3>
                        </div>

                        <div className="items">
                        </div>


                    </nav>
                </Toolbar>

            </AppBar>



            <Drawer

                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}

            >
                <DrawerHeader className="draw-bg">
                    <Typography variant="h4" onClick={handleDrawerClose} > ADMIN PANEL </Typography>
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'ltr' ? <ChevronLeftIcon className="draw-bg" /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List className="draw-ig">
                    {['Appointment', 'Calender', 'Customer', 'Employee', 'Role', 'User', 'WorkingHour'].map((text, index) => (
                        <a style={{ color: "#fff" }} href={"/" + text + "s"}>
                            <ListItem button key={text}>
                                <ListItemIcon className="draw-ig">
                                    <AssignmentIcon className="draw-ig" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </a>
                    ))}
                </List>

                <List className="draw-ig">
                    {['Support', 'Settings'].map((text, index) => (
                        <a href={"/" + text + "s"}>

                            <ListItem style={{ color: "#fff" }} className="draw-ig" button key={text}>
                                <ListItemIcon >
                                    {index % 3 === 1 ? < FavoriteIcon className="draw-ig" /> : <SettingsIcon className="draw-ig" />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </a>
                    ))}
                </List>

            </Drawer>

        </div>
    )
}

export default AdminHeader
