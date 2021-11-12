import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import {useHistory} from 'react-router-dom';
import { listaCategoria } from '../../services/Service';
import Categoria from '../../models/Categoria';

function ListaCategoria() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]) 
    const [token, setToken] = useLocalStorage('token');
    

    useEffect(()=>{
        if(token == ''){
        alert("VocÃª precisa estar logado")
        history.push("/login")
        }
    }, [token])


    async function getCategoria(){
        await listaCategoria("/categoria", setCategorias, {
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
                {categoria.descricao}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                <Link to={`/formularioTema/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                    </Button>
                    </Box>
                </Link>
                <Link to={`/deletarTema/${categoria.id}`} className="text-decorator-none">
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