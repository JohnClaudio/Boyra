import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
import ProdutoDestaque from '../../components/estaticos/produtoDestaque/ProdutoDestaque';
import CarouselComponent from '../../components/carousel/CarouselComponent';




const Home = () => {

    const tamanhoProduto = { altura: '230px', largura: '250px' }
    const tamanhoProduto2 = { altura: '500px', largura: '600px' }
    return (
        <>
            <Box>
                
                <Grid xs={12} >
                    <Box marginTop={5} padding={2}>
                        <CarouselComponent />
                    </Box>
                </Grid>


                <Box sx={{ mt: 2 }}>
                    <Typography variant="h3" align="center" gutterBottom >Destaques</Typography>
                </Box>


                <Grid container direction="row" justifyContent='flex-end' alignItems='flex-end'  >

                    <Grid item xs={12} md={6} sm={6} container direction="row" justifyContent='center' alignItems='center' >

                        <Box className='secondaryItem'>
                            <ProdutoDestaque
                                url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/Kitxampu_540x.png?v=1602944441"
                                title="Sabonetes Personalizados"
                                height={tamanhoProduto2.altura}
                                width={tamanhoProduto2.largura}
                            />
                        </Box>

                    </Grid>




                    <Grid item xs={12} md={6} sm={6}  >




                        <Box display="flex" sx={{ justifyContent: 'start' }}>

                            <Box display="flex">
                                <Box >
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593"
                                        title="Produto1"
                                        height={tamanhoProduto.altura}
                                        width={tamanhoProduto.largura}
                                    />
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/8_540x.png?v=1633532915"
                                        title="Produto1"
                                        height={tamanhoProduto.altura}
                                        width={tamanhoProduto.largura}
                                    />
                                </Box>
                                <Box>
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/salgrosso_540x.jpg?v=1623855129"
                                        title="Produto1"
                                        height={tamanhoProduto.altura}
                                        width={tamanhoProduto.largura}
                                    />
                                    <ProdutoDestaque
                                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/CapturadeTela2020-11-10as16.29.08_540x.png?v=1633532545"
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