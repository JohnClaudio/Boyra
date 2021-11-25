import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, AppBar, Toolbar, Typography, Box, TextField, IconButton } from '@material-ui/core';
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
import { toast } from 'react-toastify'

import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    let history = useHistory();
    const dispatch = useDispatch();

    function Lougout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    let funcaoAdmin
    if (token != "") {
        funcaoAdmin =
            <div>
                         <Link to="/login">
                                    <IconButton onClick={Lougout} className="icon" color="secondary" >
                                        <LogoutIcon className="icon" />
                                    </IconButton>
                                </Link>
                                
                <Button
                className="btnColor"
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                >
                    Menu
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <Link to="/cadastroProduto" className='tituloNavBar2' >
                        <MenuItem onClick={handleClose}>Cadastrar Produto</MenuItem>
                    </Link>
                    <Link to="/listaproduto"className='tituloNavBar2'>
                        <MenuItem  onClick={handleClose}>Lista Produtos</MenuItem>
                    </Link>
                    <Link to="/cadastroCategoria" className='tituloNavBar2'>
                        <MenuItem  onClick={handleClose}>Cadastrar Categoria</MenuItem>
                    </Link>
                    <Link to="/listacategoria" className='tituloNavBar2'>
                        <MenuItem  onClick={handleClose}>Lista Categorias</MenuItem>
                    </Link>
                    <Link to="/logout" className='tituloNavBar2'>
                        <MenuItem  onClick={handleClose}>Logout</MenuItem>
                    </Link>


                </Menu>



            </div>

    }


    return (

        <Grid container>
            <Grid item xs={12}>

                <AppBar position="static" className="AppBar" >
                    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1 }}>

                        <Toolbar variant="dense" >

                            <Box sx={{ display: 'flex', justifyContent: 'end', flexGrow: 0 }}>
                                <img className="" src="./images/LOGO.png" alt="" />
                                <form>
                                    <Box className="searchMenu" >
                                        <input type="text" className='inputNavBar'></input>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                                            <ul className="menu_list">
                                                <Link to='/home' className='tituloNavBar'>
                                                    <li>Inicio</li>
                                                </Link>
                                                <Link to='/produtos' className='tituloNavBar'>
                                                    <li>Produtos</li>
                                                </Link>
                                                <Link to='/sobre' className='tituloNavBar'>
                                                    <li>Sobre nós</li>
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

                        
                            </Box>


                            {funcaoAdmin}


                        </Toolbar>
                    </Box>

                </AppBar>
            </Grid>
        </Grid>
    );
}

export default Navbar