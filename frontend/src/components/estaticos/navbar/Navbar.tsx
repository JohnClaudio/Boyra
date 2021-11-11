import React, { useState, useEffect, ChangeEvent } from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, IconButton, Menu } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Icon from '@mui/material/Icon'
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';



function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function Lougout() {
        setToken('');
        history.push('/Login');
        alert('Você deslogou')
    }
   
    const statusLogado = token ? true : false ;
    return (
        <AppBar position="static" className="AppBar" elevation={0}>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: -2 }}>

                <Toolbar variant="dense"  >

                    <Box style={{ cursor: "pointer", flexGrow: 1 }} pr={5} >

                        <img className="logoNavBar" src="./images/LOGO3.png" alt="" />

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', }}>

                        <Link to='/home' className='tituloNavBar'>
                            <Typography variant='subtitle1' gutterBottom align='center' >Inicio</Typography>
                        </Link>

                        <Link to='/produtos' className='tituloNavBar'>
                            <Typography variant='subtitle1' gutterBottom align='center' >Produtos</Typography>
                        </Link>

                        <Link to='/contato' className='tituloNavBar'>
                            <Typography variant='subtitle1' gutterBottom align='center' >Contatos</Typography>
                        </Link>

                    </Box>

                    <form>
                        <Box sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1 }} className="searchMenu">

                            <input className='inputNavBar'></input>
                            <IconButton className="icon" color='secondary'>
                                <SearchIcon className="icon" />
                            </IconButton>
                        </Box>
                    </form>
                    <Box sx={{ ml: 10 }}>

                        <Link to='/login' className='tituloNavBar'>
                            <IconButton className="icon" color="secondary" >
                                <PersonIcon className="icon" />
                            </IconButton>
                        </Link>

                        <IconButton color="secondary" aria-label="upload picture" component="span">
                            <ShoppingCartIcon className="icon" />
                        </IconButton>

                   
                      
     
                            <Link to="/login">
                            <IconButton onClick={Lougout} className="icon" color="secondary" >
                                    <LogoutIcon className="icon" />
                            </IconButton>    
                            </Link>        
          
                        </Box>
                        
                               
                  
         





                </Toolbar>
            </Box>
        </AppBar>);
}

export default Navbar