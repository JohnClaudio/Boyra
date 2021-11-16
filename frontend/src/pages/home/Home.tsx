import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
import ProdutoDestaque from '../../components/estaticos/produtoDestaque/ProdutoDestaque';
import CarouselComponent from '../../components/carousel/CarouselComponent';




const Home = () => {

    const tamanhoProduto = { altura: '400px', largura: '400px' }
    const tamanhoProduto2 = { altura: '500px', largura: '600px' }
    return (
        <>
         <Grid container>

            <Grid item xs={12}>

            <Box>
                
                <Grid xs={12} >
                    <Box marginTop={5} padding={2}>
                        <CarouselComponent />
                    </Box>
                </Grid>


                <Box sx={{ mt: 2 }}>
                    
                    <Typography color="primary" variant="h3" align="center" gutterBottom >Feitos pra você</Typography>
                </Box>

                <Grid container direction="row" justifyContent='center' alignItems='center'  >

<Grid item xs={12} md={6} sm={6}  >

    <Box display="flex" sx={{ justifyContent: 'center' }}>

        <Box display="flex" >

                <ProdutoDestaque
                    url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593"
                    title="Cabelo"
                    height={tamanhoProduto.altura}
                    width={tamanhoProduto.largura}
                />

                <ProdutoDestaque
                    url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/8_540x.png?v=1633532915"
                    title="Rosto"
                    height={tamanhoProduto.altura}
                    width={tamanhoProduto.largura}
                />
   
      
                <ProdutoDestaque
                    url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/salgrosso_540x.jpg?v=1623855129"
                    title="Corpo"
                    height={tamanhoProduto.altura}
                    width={tamanhoProduto.largura}
                />
     
          
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
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>


                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>

                            <Box className="card">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description">lorem lorem lorem lorem</p>
                                <div>
                                <label className="price_old">R$: 158,00 </label>
                                <label className="price">R$: 50 PROMOÇÃO!</label>
                                </div>
                            </Box>




                        </Box>
                    </Grid>
                </Grid>
            </Box>
    



       </Grid>
                </Grid>

        </>
    )
}

export default Home;