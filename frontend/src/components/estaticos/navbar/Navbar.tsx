import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'


function Navbar() {
    return (
        <AppBar position="static" className="AppBar">
            <Toolbar variant="dense"  >
                <Box style={{ cursor: "pointer" }} pr={5} >
                    <Typography variant="h5" color="inherit" className="pd1">
                        Boyrá
                    </Typography>
                </Box>
                <Box style={{ cursor: "pointer" }} >
                    <Typography variant="h6" color="inherit" className="pd">
                        Home
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit" className="pd">
                        Login
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit" className="pd">
                        Contato
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>);
}

export default Navbar
