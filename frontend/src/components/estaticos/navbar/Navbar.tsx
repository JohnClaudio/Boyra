import React from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, IconButton } from '@material-ui/core';
import './Navbar.css'

import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';


function Navbar() {
    return (
        <AppBar position="static" className="AppBar" elevation={0}>


<Box sx={{ display: 'flex', justifyContent: 'center', mt:-2 }}>

                <Toolbar variant="dense"  >
              
                    <Box style={{ cursor: "pointer" , flexGrow:1}} pr={5} >
                    
                       <img className="logoNavBar" src="./images/LOGO3.png" alt="" />
                    </Box>

                    

                   


                        <form>
                            <Box sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1 }} className="searchMenu">

                                <TextField className="bg" id='usuario' label='Encontre seu produto!' variant='outlined' name='usuario' margin='normal' fullWidth />
                                <IconButton  className="icon" aria-label="upload picture" component="span"  >
                                    <SearchIcon className="icon"/>
                                </IconButton>
                            </Box>
                        </form>
                        <Box sx={{ml:10}}>
                        <IconButton   className="icon" color="secondary" >
                            <PersonIcon className="icon"/>
                        </IconButton>

                        <IconButton color="secondary" aria-label="upload picture" component="span">
                            <ShoppingCartIcon className="icon"/>
                        </IconButton>

                        </Box>




                   
                </Toolbar>
                </Box>
        </AppBar>);
}

export default Navbar
