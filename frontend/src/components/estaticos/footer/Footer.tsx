

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    
    root:{
        width: '100vw',
        color:'white',
    },

    background: {
        background: '#65B1C2',

    },

    icon:{
        fontSize: 60,
        color: 'white',
        
    }


    })

function Footer() {
   
    const classes = useStyles();
    return (
         <footer className={classes.root}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >

                <Grid alignItems="center" item xs={12}>
                  
                    <Box style={{  height: "60px" }} className={classes.background}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom >© 2020 Copyright:</Typography>
                        </Box>

                        <Box>
                            <a target="_blank" href="#">
                                <Typography variant="subtitle2" gutterBottom align="center" style={ {color: "white" }} > BOYRÁ</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </footer>
        
    )
}

export default Footer;