'use client'

import TemplateDefault from '../../../templates/Default'

import {
    Box,
    Container,
    Typography,
} from '@mui/material'

import '../../../globals.scss'


const Signup = () => {
    return (
        <TemplateDefault>
            <Container maxWidth='sm' component='main'>
                <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Crie sua conta
                </Typography>
                <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                    E anuncie para todo o Brasil
                </Typography>
            </Container>
            <Container maxWidth='md'>
                <Box sx={{backgroundColor:'white', padding:'30px'}}>
                    teste
                </Box>
            </Container>
        </TemplateDefault>
    )
}
export default Signup