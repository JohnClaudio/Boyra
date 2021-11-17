

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, TextField, IconButton } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { height } from '@mui/system';




const useStyles = makeStyles({

    root: {
      
        height: '300px',
        background: '#F9F9F9',
        marginTop: '5%'
    },

    background: {
        background: '#F9F9F9',
        color: '#000000',

    },

    icon: {
        fontSize: 60,
        color: '#65B1C2',


    },

    cartao: {
        width: '200px',
        height: '45px',
        marginTop: 15,
    }

})

function Footer() {

    const classes = useStyles();
    return (
        <Grid container>

        <Grid item xs={12}>
        <footer className={classes.root}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >

                <Grid alignItems="center" item xs={6}>
                    <Box sx={{ ml: 7, marginTop: 5 }} >
                        <Box>
                            <Typography variant="subtitle2" style={{ color: "#000000" }} > Contato</Typography>
                            <Typography variant="subtitle2" style={{ color: "#000000" }} > Termo de Serviço</Typography>
                            <Typography variant="subtitle2" style={{ color: "#000000" }} > Politica de Privacidade</Typography>
                            <Typography variant="subtitle2" style={{ color: "#000000" }} > Cancelamento, troca e reembolso</Typography>
                        </Box>
                        <Box sx={{ marginTop: 45 }}>
                            <IconButton color="primary" aria-label="upload picture" component="span" >
                                <InstagramIcon className="icon" />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <FacebookIcon className="icon" />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={6}>
                    <Typography variant="subtitle2" style={{ color: "#000000" }} > Newsletter</Typography>

                   <Box display="flex"> 
                    <input>
                    </input>
                    <Typography  variant="subtitle2" style={{ marginLeft:9, color: "#000000" }} > Inscrever</Typography>
                   </Box> 
                    <Box sx={{ ml:50, marginTop:80 }}>
                    <img src="https://i.imgur.com/CvXjFnk.png" className={classes.cartao} />
                    </Box>

                </Grid>
            </Grid>
        </footer>
       </Grid>
       </Grid>
    )
}

export default Footer;