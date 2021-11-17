import React, { useState, useEffect } from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import Produto from '../../models/Produto';
import { busca } from '../../services/Service';
import './Produtos.css'



const Produtos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();


    async function getProduto() {
        await busca("/produtos", setProdutos)

    }

    useEffect(() => {

        getProduto()

    }, [produtos.length])
    console.log(produtos)

    return (
        <>
              
            <Grid container direction="row" justifyContent='center' alignItems='center'  >
                <Grid item xs={8}  >
                    <Box display="flex" className="flexcard" sx={{ mt: 5 }}>
                        {
                            produtos.map(produto => (


                                <Box className="card">
                                    <img className="cardImagem" src={produto.imagemUrl} alt="" />
                                    <p className="description">{produto.nome}</p>
                                    <label className="price">{produto.preco}</label>
                                </Box>

                            ))
                        }
                    </Box>
                </Grid>
            </Grid>
        </>
    )

}

export default Produtos;

