import React from 'react'
import {Typography, Box, Grid } from '@material-ui/core/';
import './MenuCategoria.css'

export default function MenuCategoria() {
    return (
        <div>
            
            <Box className="bg" sx={{ display: 'flex', justifyContent: 'center' }} >
                
                <Box sx={{mr:8}}>
                <Typography className="roboto" variant="subtitle2">Categoria 1 </Typography>
                </Box>
              
                <Box sx={{mr:8}}>
                <Typography className="roboto" variant="subtitle2">Categoria 1 </Typography>
                </Box>

                <Box sx={{mr:8}}>
                <Typography className="roboto" variant="subtitle2">Categoria 1 </Typography>
                </Box>

                <Box sx={{mr:8}}>
                <Typography className="roboto" variant="subtitle2">Categoria 1 </Typography>
                </Box>
            </Box>
        </div>
    )
}
