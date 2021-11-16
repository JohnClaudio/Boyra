import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css'
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../models/Produto';
import { busca, buscaId, post} from '../../services/Service'

function CadastroProduto() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 1,
            nome: '',
            descricao: '',
            palavraChave: ''
        })
        const [objetoCategoria, setObjetoCategoria] = useState<Categoria>(
            {
                id: 1,
                nome: '',
                descricao: '',
                palavraChave: ''
            })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        imagemUrl: '',
        preco: 0,
        categoria: objetoCategoria
    })

    useEffect(() => { 
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategorias, /*{
            headers: {
                'Authorization': token
            }
        }*/)
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, /*{
            headers: {
                'Authorization': token
            }
        }*/)
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso');
        }
        console.log(produto)
        console.log(token)

      /*  back()


    function back() {
        history.push('/produtos')
    }*/

    return (
        <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
            <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto</Typography>
            <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
            <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />
            <TextField value={produto.imagemUrl} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="imagemUrl" label="imagemUrl" name="imagemUrl" variant="outlined" margin="normal" fullWidth />
            <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preco" name="preco" variant="outlined" margin="normal" fullWidth />            
            <TextField value={produto.categoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="categoria" label="categoria" name="categoria" variant="outlined" margin="normal" fullWidth />

            <FormControl >
                <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, /*{
                            headers: {
                                'Authorization': token
                            }
                        }*/)}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>
                            ))
                        }
                </Select>
                <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </FormControl>
        </form>
    </Container>
    )
}

export default CadastroProduto
