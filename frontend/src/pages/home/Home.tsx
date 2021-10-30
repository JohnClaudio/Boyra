import { Grid, Box, Typography, Button} from '@material-ui/core';
import React from 'react';
import './Home.css';


 const Home = () =>{
return(
  <>
    <Box className="homeImagem">
    
    </Box>
 
    <Grid container direction="row" justifyContent='flex-end' alignItems='flex-end'  >

    <Grid item xs={6}  >

    <Box  paddingX={10}   mt={5}>
    <img className="principalItem" src="https://http2.mlstatic.com/D_NQ_NP960486-MLA45652187904_042021-F.jpg" alt="" />
     </Box>

    </Grid>

    <Grid item xs={6} spacing={2} >
        <Box display="flex" alignItems="center" justifyContent="center">
        

        <Box paddingTop={1} display="flex"  sx={{ justifyContent: 'flex-end' }}>

            <Box >  
                <Box p={2}>  
                <img className="secondaryItem" src="https://http2.mlstatic.com/D_NQ_NP960486-MLA45652187904_042021-F.jpg" alt="" />           
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
  

</>
)
}

export default Home;