import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../services/Service';
import Produto from '../../models/Produto';


function DeletarProduto() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [produtos, setProdutos] = useState<Produto[]>([]) 
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
      if (token == "") {
        toast.error('VocÃª precisa estar logado', {
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
    buscaId(`/produtos/${id}`, setProdutos, {
        headers: {
          'Authorization': token
        }
      })
    }

      function sim(): void {
          history.push('/produtos')
          deleteId(`/produtos/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          toast.success('Produto deletado com sucesso', {
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
          history.push('/produtos')
        }
return (
  <>
    <Box m={2}>
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar a Produto:
            </Typography>
            <Typography color="textSecondary" >
            
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
            <Box>
            <Button  onClick={nao} variant="contained" size='large' color="secondary">
              NÃ£o
            </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  </>
);
}
export default DeletarProduto;