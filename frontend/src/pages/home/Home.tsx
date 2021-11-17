import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
import ProdutoDestaque from '../../components/estaticos/produtoDestaque/ProdutoDestaque';
import CarouselComponent from '../../components/carousel/CarouselComponent';




const Home = () => {

    const tamanhoProduto = { altura: '300px', largura: '300px' }
    const tamanhoProduto2 = { altura: '500px', largura: '600px' }
    return (
        <>
         <CarouselComponent />
         <Grid container>

            <Grid item xs={12}>

            <Box>
                    <Box marginTop={0} padding={0}>           
            </Box>
   

                <Box marginTop={3}>
                  
                </Box>
                <Grid container direction="row" justifyContent='center' alignItems='center'  >
                    <Grid item xs={9}  >
                        <Box>
                    <Typography variant="h5" align="center" gutterBottom >PRODUTOS EM PROMOÇÃO</Typography>
</Box>

                        <Box display="flex" className="flexcard" sx={{ mt: 3 }}>
                       
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
    

   
            <Box sx={{ mt: 2, mb:5 }}>
                    
                    <Typography variant="h4" align="center" gutterBottom >Feitos pra você</Typography>
                    </Box>
    
                    <Grid container direction="row" justifyContent='center' alignItems='center'  >
                     <Grid item xs={8}>
    
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


                     <ProdutoDestaque
                        url="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/salgrosso_540x.jpg?v=1623855129"
                        title="Corpo"
                        height={tamanhoProduto.altura}
                        width={tamanhoProduto.largura}
                    />
                  

                  </Box>
                
    </Grid>
    </Grid>
    
    

       </Grid>
                </Grid>

        </>
    )
}

export default Home;