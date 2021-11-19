import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../models/Produto';
import { busca } from '../../services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import { useHistory } from 'react-router-dom'
//import { useSelector } from 'react-redux';
//import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';

import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

const ListaProduto = () => {

  
  const [produtos, setProdutos] = useState<Produto[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
 /* const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );*/

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

  async function getProduto() {
    await busca("/produtos", setProdutos)
  }

  
  useEffect(() => {

    getProduto()

  }, [produtos.length])

  return (
    <>
      {
        produtos.map(produto => (

          
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.descricao}
                </Typography>
      
                <Typography variant="body2" component="p">
                  {produto.preco}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
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
    </>
  )
}

export default ListaProduto;