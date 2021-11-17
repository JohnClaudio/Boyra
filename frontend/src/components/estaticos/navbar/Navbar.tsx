import React, { useState, useEffect, ChangeEvent } from 'react';
import {Grid,  AppBar, Toolbar, Typography, Box, TextField, IconButton, Menu } from '@material-ui/core';
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
import HomeIcon from '@mui/icons-material/Home';
import {toast} from 'react-toastify'




function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function Lougout() {
        setToken('');
        history.push('/Login');
        toast.info('Você deslogou', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    }
   
    const statusLogado = token ? true : false ;
    return (

    <Grid container>
    <Grid item xs={12}>
          
        <AppBar position="static" className="AppBar" >
            <Box sx={{ display: 'flex', justifyContent: 'center', pt:1  }}>

                <Toolbar variant="dense" >
                       
           
           
                <Box  sx={{ display: 'flex', justifyContent: 'end', flexGrow: 0 }}>
                <img className="" src="./images/LOGO.png" alt="" />
                    <form>
                        <Box  className="searchMenu">
                            <input type="text" className='inputNavBar'></input>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                            <ul className="menu_list">
                                <Link to='/home' className='tituloNavBar'>
                                <li>Inicio</li>
                                </Link>
                                <Link to='/produtos' className='tituloNavBar'>
                                <li>Produtos</li>
                                </Link>
                                <Link to='/contato' className='tituloNavBar'>
                                <li>Contatos</li>
                                </Link>
                            </ul>

</Box>

                        </Box>
                        
                    </form>
                    <IconButton className="icon" color='secondary'>
                                <SearchIcon className="icon" />
                            </IconButton>

                   
</Box>
            

                                        
                    <Box sx={{ ml: 0 }}>

                  
                            
                       
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

        </AppBar>
        </Grid>
           </Grid>
        );
}

export default Navbar