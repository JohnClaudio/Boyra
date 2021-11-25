import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
import ProdutoDestaque from '../../components/estaticos/produtoDestaque/ProdutoDestaque';
import CarouselComponent from '../../components/carousel/CarouselComponent';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Home = () => {

    const tamanhoProduto = { altura: '300px', largura: '300px' }
    const tamanhoProduto2 = { altura: '500px', largura: '600px' }
    return (
        <>
            <CarouselComponent />
            <Grid container direction="row" justifyContent='center' alignItems='center' >

            <Grid item xs={12} justifyContent='center' alignItems='center' >
            
                    <Box className="" >

                    <Box sx={{ mt: 0, mb: 2 }}>
                    <Typography variant="h4" align="center" gutterBottom >Feitos pra você</Typography>
                    </Box>

                <Box display="flex" >
                        <ProdutoDestaque
                            url="https://imgur.com/E6L6JnQ.png"
                            title="Cabelo"
                            height={tamanhoProduto.altura}
                            width={tamanhoProduto.largura}
                        />

                        <ProdutoDestaque
                            url="https://imgur.com/P9aSWXS.png"
                            title="Rosto"
                            height={tamanhoProduto.altura}
                            width={tamanhoProduto.largura}
                        />

                        <ProdutoDestaque
                            url="https://imgur.com/QYzm4b4.png"
                            title="Vestuário"
                            height={tamanhoProduto.altura}
                            width={tamanhoProduto.largura}
                        />


                        <ProdutoDestaque
                            url="https://imgur.com/09qhrt7.png"
                            title="Higiene"
                            height={tamanhoProduto.altura}
                            width={tamanhoProduto.largura}
                        />

</Box>
                    </Box>

                </Grid>
                
                <Grid item xs={12} justifyContent='center' alignItems='center' >
                    <Grid item xs={9} justifyContent='center' alignItems='center'  >
                        
                        <Box sx={{ mt: 5 }}>
                            <Typography variant="h5" align="center" gutterBottom >PRODUTOS EM PROMOÇÃO</Typography>
                        </Box>

                        <Box display="flex" className="flexcard" sx={{ mt: 5 }}>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/triofacial_540x.jpg?v=1619023593" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 158,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/castanhaeacafrao_540x.png?v=1634224377" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 158,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/5_2b1247be-c4fb-45c5-aa67-ba60db5ff6ca_540x.png?v=1633532199" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 158,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/trioabacate_2_540x.png?v=1625228181" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 158,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/trioabacate_540x.png?v=1625071363" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 158,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/CapturadeTela2020-09-02as12.03.27_540x_086f7a8f-fb33-4523-88c6-96ccce28b8af_540x.png?v=1630456228" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 158,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/sabaodecocoherbaiye_540x.jpg?v=1584549723" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 25,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

                            <Box className="card_promo" display="flex" flexDirection="column">
                                <img src="https://cdn.shopify.com/s/files/1/0048/9508/0519/products/CapturadeTela2020-09-02as12.00.11_540x.png?v=1629722581" alt="" />
                                <p className="description_promocao">lorem lorem lorem lorem</p>
                                <div>
                               
                                <label className="price_old_promo">R$: 158,00 </label>
                                <label className="price_promo">R$: 49,99  PROMOÇÃO!</label>
                                <br/>
                               <Box sx={{pt:2}} >
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingBasketIcon />}> Comprar </Button>                        
                                    <Button className="btn" variant="outlined" startIcon={<ShoppingCartIcon />}> Carrinho </Button>
                                </Box>
                                </div>                  
                            </Box>

        
                          

                      

                        </Box>

                    </Grid>
                



       


              
            </Grid>



        </Grid>
        

        </>
    )
}

export default Home;