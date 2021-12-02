import { withStyles } from "@material-ui/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Grid,Button} from '@material-ui/core';
import GIcon from './Gicon';
// Authentication Grid Used in Sign In and Sign Up Page
const styles = {
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
}

function OAuthSignIn(props) {
    const {classes} = props;
    return (
    <Grid container direction={'row'} spacing={3} alignItems='center' justifyContent='center'>
    <Grid item>
        <Button variant="contained"
        className = {classes.button}
        startIcon={<FacebookIcon />}
        >
            Facebook
        </Button>
        </Grid>
        <Grid item>
        <Button variant="contained"
        className = {classes.button}
        size="large"
        color="primary"
        startIcon={<LinkedInIcon />}
        >
            LinkedIn
        </Button>
        </Grid>
        <Grid item>
        <Button variant="contained"
        className = {classes.button}
        startIcon={<GIcon />}
        >
            Google
        </Button>
        </Grid>
    </Grid>
    )
}

export default withStyles(styles)(OAuthSignIn);