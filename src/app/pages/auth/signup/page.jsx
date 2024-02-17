
'use client'

import { Formik } from 'formik'
import TemplateDefault from '../../../templates/Default'

import {
    Box,
    Container,
    Typography,
    FormControl,
    InputLabel,
} from '@mui/material'

import '../../../globals.scss'


import styled from 'styled-components';


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