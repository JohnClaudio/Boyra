import React, { useEffect } from 'react';
import { Card, Grid, TextField, Typography } from '@mui/material';
import './Sobre.css';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import { CardContent, CardMedia } from '@material-ui/core';
import GitHubIncon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



function Sobre() {



    return (
        <>

            <Grid container className="backgound-white">

                <Box>
                    <Typography variant="h3" className="font">Equipe</Typography>
                </Box>

                <Grid container className="alinhamento" paddingY={5}>
                    <Grid item xs={2} className="cards" >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://imgur.com/KskBfm3.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className='texto3'>
                                        Caique Batista
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">
                                   
                                    <a href="https://github.com/caiquebatistam" target="_blank">
                                        <GitHubIcon className="icons alinhamento2" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/caique-batista-9505aa167/" target="_blank">
                                        <LinkedInIcon className="icons1" />
                                    </a>
                                    
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://imgur.com/niDnzVr.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className='texto3'>
                                        Thalyta Campos
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/samilathalyta" target="_blank">
                                        <GitHubIncon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/thalyta-c-b06850a3/" target="_blank">
                                        <LinkedInIcon className="icons1" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://imgur.com/pL3sISA.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className='texto3'>
                                        Inaie Forster
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/inaieforster" target="_blank">
                                        <GitHubIncon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/inaie-forster-904120a0/" target="_blank">
                                        <LinkedInIcon className="icons1" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://imgur.com/GDiz8Gf.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className='texto3'>
                                        João Claudio
                                    </Typography>


                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/JohnClaudio" target="_blank">
                                        <GitHubIncon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/joaoclaudiobarroso/" target="_blank">
                                        <LinkedInIcon className="icons1" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://imgur.com/po39YZo.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" className='texto3'>
                                        Melissa Amorim
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/amorimmel" target="_blank">
                                        <GitHubIncon className="icons" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/melissa-amorim-6840a4198/" target="_blank">
                                        <LinkedInIcon className="icons1" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center" className="backgound-white">
                    <Grid alignItems="center" item xs={6} >
                        <Box style={{ margin: "50px" }}>
                            <Typography variant="h4" component="h4" className='texto'>Boyrá</Typography>
                            <Typography variant="h6" component="h6" className='texto'>Nosso propósito</Typography>

                            <Typography color="textPrimary" align="center" textAlign="justify" className='texto'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://imgur.com/CzotpFA.png" alt="" className="img" />
                    </Grid>
                </Grid>




            </Grid>


        </>
    );

}

export default Sobre