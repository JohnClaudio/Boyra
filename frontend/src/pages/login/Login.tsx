import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
function Login() {
    
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        const fazsol = useSelector<TokenState, TokenState["tokens"]>(
            (state) => state.tokens
          );

        
        useEffect(()=>{
            if(token != ''){
                console.log('entrouaqui')
                console.log(token)
                dispatch(addToken(token));
                console.log(  dispatch(addToken(token)))
                history.push('/home')

                console.log(fazsol)
            }
        }, [token])

        

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }


        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{              
                await login(`/usuarios/logar`, userLogin, setToken)           
                toast.success('Usuário logado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                console.log(userLogin)
            }catch(error){
                toast.error('Dados do usuário inconsistentes. Erro ao logar!!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
         
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box className="boxLogin">
                    <form onSubmit={onSubmit}>
                       
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <label>Nome</label>
                        
                        <TextField className='inputLogin' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='digite seu email' variant='outlined' name='usuario' margin='normal' fullWidth  />
                        
                        <label>Nome</label>
                 
                        <TextField className='inputLogin' value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth/>
                       
                        <TextField className='inputLogin' value={userLogin.token} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='token' label='digite seu email' variant='outlined' name='token' margin='normal' fullWidth  />
                        
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                
                    <Box display='flex' justifyContent='center' marginTop={2}>
            
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>

        </Grid>
    );
}

export default Login;