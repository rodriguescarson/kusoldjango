import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { styled, useTheme } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from "@material-ui/core/Button";
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

function AdminHeader(props) {
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
            <Button color="inherit" href={props.h} variant="outlined" style={{ minWidth: '180px' }}>{props.purpose}</Button>


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
          <Typography variant="h4" onClick={handleDrawerClose} > Welcome </Typography>
          <IconButton onClick={handleDrawerClose} style={{ float: "right", paddingLeft: "60px" }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon className="draw-bg" /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <List className="draw-ig" style={{ backgroundColor: "black", height: "600px" }}>

          <a href={"/signup"}>
            <ListItem style={{ color: "#fff" }} className="draw-ig" button>
              <ListItemIcon >
                <AppRegistrationIcon className="draw-ig" />
              </ListItemIcon>
              <ListItemText primary={"SignUp"} />
            </ListItem>
          </a>

          <a href={"/signin"}>
            <ListItem style={{ color: "#fff" }} className="draw-ig" button>
              <ListItemIcon >
                <LoginIcon className="draw-ig" />
              </ListItemIcon>
              <ListItemText primary={"Signin"} />
            </ListItem>
          </a>

          <a href={"/contact"}>
            <ListItem style={{ color: "#fff" }} className="draw-ig" button>
              <ListItemIcon >
                <InfoIcon className="draw-ig" />
              </ListItemIcon>
              <ListItemText primary={"Contact Us"} />
            </ListItem>
          </a>
        </List>
      </Drawer>
    </div>
  )
}

export default AdminHeader
