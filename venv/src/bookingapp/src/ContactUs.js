import { Grid,Box,Typography, Button, withStyles, TextField } from '@material-ui/core';
const styles = {
    box: {
        width: 500,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    }
}

function ContactUs(props) {
    const {classes} = props
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
              <a href='/'>
              'O'ppointment
              </a>
            </Typography>
            </Grid>
            </Grid>
            <Button color="inherit" href="/signin" variant="outlined">Login</Button>
        </Toolbar>
    </AppBar><br /> */}
    <Grid container spacing={2}>
  <Grid item xs={8}>
    <Box className={classes.box} m="auto" p={7} sx={{ boxShadow: 5}}>
    <Typography variant="h4" align = "center">
        Contact Us<Typography variant="subtitle1" align = "inherit">
        Feel Free to Contact Us    
    </Typography>
         
    </Typography> <br />
    <Grid container spacing={2}>
  <Grid item xs={8}>
    <form className={classes.forms}>
    <Grid container direction={'row'}>
    <Grid item xl={3} md={6} sm={12} xs={12}>
    <TextField id="standard-basic" label="First Name" variant="outlined"/> 
    </Grid>
    <Grid item xl={3} md={6} sm={12} xs={12}>
    <TextField id="standard-basic" label="Last Name" variant="outlined"/> 
    </Grid>
    <Grid item xl={3} md={3} sm={12} xs={12}>
    {/* <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        /> */}
    </Grid>
    </Grid>
    <br />
    <TextField label="Email Id" type="email" variant="outlined" fullWidth/> <br />
        <br />
        <Grid container direction = {'row'} spacing={4}>
        <Grid item>
        <TextField label="Contact Number" variant='outlined' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
        </Grid>
        <Grid item>
        
        <TextField id="standard-basic" label="Business Name" variant="outlined" required/>
        </Grid>
        </Grid>
        <br />
        
        
        <div align="right">
        <br />
        <br />
        
            <Button type="submit" variant="contained" color="primary">
                Send Message
            </Button>
        </div>
        
        </form>
        </Grid>
        <Grid item xs={4}>
        <Grid item xl={3} md={3} sm={12} xs={12}>
    {/* <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        /> */}
        <TextField style ={{width: '500%'}}
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={14}
          defaultValue="Message"
          variant="filled"
        />
    </Grid>
    
    </Grid>
    </Grid>
        </Box>
        </Grid>
        <Grid item xs={4} align = "left">
        <br />
        <br />
        <br />
        <br /> <br />

        <Typography variant="h4" align = "left">
        🌏Our Office
        
    </Typography> 
    <Typography variant="h6" align = "left">
         _____________________________________________
    </Typography> <br />  
    <Typography variant="h6" align = "left" >
        Kusol lab
    </Typography> <br />  

    xyz,New York <br />  
    P:(123)456-789
    <br />   <br />  
    <Typography variant="h6" align = "left">
        Praveen
    </Typography>
    abc@gmail.com

    
  </Grid>
  </Grid>
    
    </div>
    )
}

export default withStyles(styles)(ContactUs);