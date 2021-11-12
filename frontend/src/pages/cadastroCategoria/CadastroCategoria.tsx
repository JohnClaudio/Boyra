import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './cadastroCategoria.css'
import Categoria from '../../models/Categoria';
import { Button, Grid, TextField, Typography, Box } from '@material-ui/core';
import { cadastroCategoria } from '../../services/Service';


function CadastroCategoria() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]) 
    const [token, setToken] = useLocalStorage('token');
    

    useEffect(() => {
        if (token == "") {
            alert("É necessário estar logado para criar nova categoria!")
            history.push("/login")
        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>({  // armazena uma categoria especifico de acordo com ID
        descricao: '',
        id: 0,
        nome: '',
        palavraChave: '',
    })


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        cadastroCategoria(`/categoria`, categoria, setCategoria,
        {
            headers: {
            'Authorization': token
            }
        })
        console.log(categoria)
        console.log(token)
        alert('Categoria cadastrada com sucesso!!')
}


    return (
        <div>  
                <Grid container direction='row' justifyContent='center' alignItems='center'>
            
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} sx={{mt:20}}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='descricao' label='descricao' variant='outlined' name='descricao' margin='normal'fullWidth />
                        <TextField value={categoria.palavraChave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='palavraChave' label='palavraChave' variant='outlined' name='palavraChave' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    OK
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>

        </div>
);
}

export default CadastroCategoria;