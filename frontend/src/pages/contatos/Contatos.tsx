import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Contato.css';
import { TextField } from '@mui/material';

function Contato() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={5} >
                    <form>
                        <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center'className='textos' >Fale Conosco</Typography>
                        <TextField id='nome' label='nome completo' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='assunto' label='assunto' variant='outlined' multiline rows={6} name='assunto' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Enviar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Contato;
