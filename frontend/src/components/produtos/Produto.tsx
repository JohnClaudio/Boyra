import React from 'react'
import { Box, Typography, Button } from '@material-ui/core';
function Produto(prop: { nome: string, title: string, height: string, width: string }) {
    return (
        <div className="flexcard">
        <Box className="card">
            <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
            <p className="description">lorem lorem lorem lorem</p>
           
            <div>
                <label className="price_old">R$: 158,00 </label>
                <label className="price">R$: 50 PROMOÇÃO!</label>
            </div>

            <Button variant="contained" color="primary">
            Comprar
            </Button>

        </Box>
        </div>
    )
}

export default Produto
