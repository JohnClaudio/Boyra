import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
import ProdutoDestaque from '../../components/estaticos/produtoDestaque/ProdutoDestaque';


const Home = () => {
    return (
        <>
            <Box>
                <Box className="homeImagem" >

                    <Box className="tituloHome">
                        <Typography className="roboto" variant="h4">Qualidade e Sustentabilidade</Typography>
                    </Box>

                </Box>

                <Box sx={{ mt: 5 }}>
                    <Typography variant="h3" align="center" gutterBottom >Destaques</Typography>
                </Box>


                <Grid container direction="row" justifyContent='flex-end' alignItems='flex-end'  >

                    <Grid item xs={6}  >

                        <Box className='secondaryItem'>
                            <ProdutoDestaque
                                url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                title="Produto1"
                                height="450px"
                                width="60%"
                            />
                        </Box>

                    </Grid>




                    <Grid item xs={6}   >

                        <Box display="flex" alignItems="center" justifyContent="center" sx={{ pb: 10 }}>


                            <Box paddingTop={5} paddingRight={1} display="flex" sx={{ justifyContent: 'flex-end' }}>

                                <Box display="flex" >
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height="450px"
                                        width="70%"
                                    />
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height="550px"
                                        width="70%"
                                    />
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height="550px"
                                        width="70%"
                                    />
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height="550px"
                                        width="70%"
                                    />
                                </Box>




                            </Box>

                        </Box>

                    </Grid>
                </Grid>

                <Box marginTop={0}>
                    <Typography variant="h3" align="center" gutterBottom >Novidades</Typography>
                </Box>
                <Grid container direction="row" justifyContent='center' alignItems='center'  >
                    <Grid item xs={8}  >
                        <Box display="flex" className="flexcard" sx={{ mt: 5 }}>
                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>


                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <label className="price">R$: 50</label>
                            </Box>




                        </Box>
                    </Grid>
                </Grid>
            </Box>



        

        </>
    )
}

export default Home;