import {lazy,Suspense} from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core';

const Loading = () =>{
    return (
        <Suspense fallback={<div></div>}>
        <Box className="loading" display="flex" alignItems='center' justifyContent='center'>
        <Typography variant="h6" align="center" gutterBottom >Aguarde um momento...
        <br/>Estamos preparando tudo pra você </Typography>
        <img width="400px" src="https://wista.com.br/wp-content/uploads/2021/09/GIF-OK-2.gif" alt="" />   
       </Box>
       </Suspense>
    )
}

export default Loading
