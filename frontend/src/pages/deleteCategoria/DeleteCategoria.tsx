import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './DeleteCategoria.css'

import { Button, Grid, TextField, Typography, Box, CardContent, CardActions, Card } from '@material-ui/core';
import { toast } from 'react-toastify';
import { buscaId, deletarId  } from '../../services/Service';
import Categoria from '../../models/Categoria';


import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';



  

function DeleteCategoria() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]) 
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == "") {
            toast.error('É necessário estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            
            history.push("/login")
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    
        async function findById(id: string) {
            buscaId(`/categoria/${id}`, setCategorias, {
                headers: {
                'Authorization': token
                }
            })
            }

            function sim() {
                console.log(id)
                history.push('/listacategoria')
                deletarId(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
                });
                toast.success('Categoria deletada com sucesso', {
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


            function nao() {
                history.push('/listacategoria')
            }
            
    return (
        <>
        <Box m={2}>
            <Card variant="outlined">
            <CardContent>
                <Box justifyContent="center">
                <Typography color="textSecondary" gutterBottom>
                    Deseja deletar a Categoria:
                </Typography>
                <Typography color="textSecondary">

                </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                <Box mx={2}>
                    <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                    Sim
                    </Button>
                </Box>
                <Box mx={2}>
                    <Button  onClick={nao} variant="contained" size='large' color="secondary">
                    Não
                    </Button>
                </Box>
                </Box>
            </CardActions>
            </Card>
        </Box>
        </>
    );
    }
export default DeleteCategoria;
