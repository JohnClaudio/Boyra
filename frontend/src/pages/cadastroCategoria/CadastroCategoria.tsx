import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './cadastroCategoria.css'
import Categoria from '../../models/Categoria';
import { Button, Grid, TextField, Typography, Box } from '@material-ui/core';
import { cadastroCategoria, put, post} from '../../services/Service';
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';


function CadastroCategoria() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]) 
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      
    

    useEffect(() => {
        if (token == "") {
            toast.error('É necessário estar logado para criar nova categoria!', {
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




    const idNumber = parseInt (id)
    const [categoria, setCategoria] = useState<Categoria>({  // armazena uma categoria especifico de acordo com ID
        descricao: '',
        id: idNumber,
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
        console.log(categoria.id)
        console.log(categoria.nome)

        if (id !== undefined) {
            put(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso', {
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
        back()

    }

    function back() {
        history.push('/listaCategoria')
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

export default CadastroCategoria