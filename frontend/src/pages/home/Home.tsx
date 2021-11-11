import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
import ProdutoDestaque from '../../components/estaticos/produtoDestaque/ProdutoDestaque';




const Home = () => {

    const tamanhoProduto = { altura: '230px', largura: '250px' }
    const tamanhoProduto2 = { altura: '500px', largura: '600px' }
    return (
        <>
            <Box>
                <Box className="homeImagem" >

                    <Box className="tituloHome">
                        <Typography className="roboto" variant="h4">Qualidade e Sustentabilidade</Typography>
                    </Box>

                </Box>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="h3" align="center" gutterBottom >Destaques</Typography>
                    <hr></hr>
                </Box>


                <Grid container direction="row" justifyContent='flex-end' alignItems='flex-end'  >

                    <Grid item xs={6} container direction="row" justifyContent='center' alignItems='center' >

                        <Box className='secondaryItem'>
                            <ProdutoDestaque
                                url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                title="Sabonetes Personalizados"
                                height={tamanhoProduto2.altura}
                                width={tamanhoProduto2.largura}
                            />
                        </Box>

                    </Grid>




                    <Grid item xs={6}   >




                        <Box paddingTop={3} paddingRight={4} paddingLeft={4} display="flex" sx={{ justifyContent: 'start' }}>

                            <Box display="flex" >
                                <Box paddingBottom={-2} paddingLeft={4}>
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height={tamanhoProduto.altura}
                                        width={tamanhoProduto.largura}
                                    />
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height={tamanhoProduto.altura}
                                        width={tamanhoProduto.largura}
                                    />
                                </Box>
                                <Box>
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height={tamanhoProduto.altura}
                                        width={tamanhoProduto.largura}
                                    />
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/novacesta_540x.png?v=1606162938"
                                        title="Produto1"
                                        height={tamanhoProduto.altura}
                                        width={tamanhoProduto.largura}
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