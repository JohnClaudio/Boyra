import { Grid, Box, Typography, Button} from '@material-ui/core';
import React from 'react';
import './Home.css';


 const Home = () =>{
return(
  <>
  <Box>
    <Box className="homeImagem" >

        <Box className="tituloHome">
        <Typography className="roboto" variant="h4">Produtos em Destaque </Typography>
        </Box>

    </Box>
 
 <Box >
    <Grid container direction="row" justifyContent='flex-end' alignItems='flex-end'  >

    <Grid item xs={6}  >

    <Box  paddingX={10}   mt={5} sx={{pb:10}}>
    <img className="principalItem" src="https://http2.mlstatic.com/D_NQ_NP960486-MLA45652187904_042021-F.jpg" alt="" />
     </Box>

    </Grid>

    <Grid item xs={6} spacing={2}  >
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ pb:10}}>


        <Box paddingTop={1}  display="flex"  sx={{ justifyContent: 'flex-end' }}>

            <Box >  
                <Box p={2}>  
                <img className="secondaryItem" src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938" alt="" />           
                </Box>
                <Box p={2}>  
                <img className="secondaryItem" src="https://http2.mlstatic.com/D_NQ_NP960486-MLA45652187904_042021-F.jpg" alt="" />           
                </Box>
           
            </Box>

            <Box >  
                <Box p={2}>  
                <img className="secondaryItem" src="https://http2.mlstatic.com/D_NQ_NP960486-MLA45652187904_042021-F.jpg" alt="" />           
                </Box>
                <Box  p={2}>  
                <img className="secondaryItem" src="https://http2.mlstatic.com/D_NQ_NP960486-MLA45652187904_042021-F.jpg" alt="" />           
                </Box>
           
            </Box>

         




  
 

            </Box>
 
     </Box>
         
    </Grid>
    </Grid>
  
  </Box>
    </Box>


  
    <Box style={{  height: "60px" }} className="aux">
        <Box paddingTop={1}>
            <Typography variant="subtitle2" align="center" gutterBottom >© 2020 Copyright:</Typography>
        </Box>

        <Box>
            <a target="_blank" href="#">
                <Typography variant="subtitle2" gutterBottom align="center" style={{color: "white" }} > BOYRÁ</Typography>
            </a>
        </Box>
    </Box>

</>
)
}

export default Home;