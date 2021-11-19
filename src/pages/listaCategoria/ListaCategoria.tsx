import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import {useHistory} from 'react-router-dom';
import { listaCategoria } from '../../services/Service';
import Categoria from '../../models/Categoria';
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';



  

function ListaCategoria() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]) 
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
  

    useEffect(() => {
        if (token == "") {
        toast.error('Você precisa estar logado', {
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


    async function getCategoria(){
        await listaCategoria("/categoria", setCategorias,{
            headers: {
                'Authorization': token
            }
            })
        }


    useEffect(()=>{
        getCategoria()
    }, [categorias.length])

    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid item xs = {4}>
        
        {
        categorias.map(categoria =>(
        <Box m={2} >

            <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Categoria
                </Typography>
                <Typography variant="h5" component="h2">
                {categoria.nome}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                <Link to={`formularioCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                    </Button>
                    </Box>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                        deletar
                    </Button>
                    </Box>
                </Link>
                </Box>
            </CardActions>
            </Card>
        </Box>
        ))
        }
        </Grid>

</Grid>
        </>
        
    );
    }


    export default ListaCategoria;