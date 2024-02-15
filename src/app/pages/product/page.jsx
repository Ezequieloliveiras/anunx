'use client'

import {
    Container,
    Grid,
    Typography,
    Chip,
    Box,
    Card,
    CardHeader,
    Avatar,
    CardMedia
} from "@mui/material"

import Carousel from "react-material-ui-carousel"
import TemplateDefault from '../../templates/Default'
import '../../globals.scss'

const Product = () => {
    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className='box-carossel'>
                            <Carousel 
                            autoPlay
                            animation='slide'
                            >
                                <Card className='card-carousel'>
                                    <CardMedia className='card-media'
                                        image='https://source.unsplash.com/random?wallpapers?a=1'
                                        title='Titulo da imagem'
                                    />
                                </Card>
                                <Card className='card-carousel'>
                                    <CardMedia className='card-media'
                                        image='https://source.unsplash.com/random?wallpapers?a=2'
                                        title='Titulo da imagem'
                                    />
                                </Card>
                                <Card className='card-carousel'>
                                    <CardMedia className='card-media'
                                        image='https://source.unsplash.com/random?wallpapers?a=3'
                                        title='Titulo da imagem'
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box className='box-titles'>
                            <Typography component='span' variant='caption'>
                                Publicado 16 de junho de 2021
                            </Typography>
                            <Typography component='h4' variant='h4' className='productName'>
                                Jaguar XE 2.0 D R-Sport Aut.
                            </Typography>
                            <Typography component='h4' variant='h4' className='price'>
                                R$ 50.000,00
                            </Typography>
                            <Chip label='Categoria' />
                        </Box>

                        <Box className='box-text'>
                            <Typography component='h6' variant='h6' fontWeight='600'>Descrição</Typography>
                            <Typography component='p' variant='body2'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vitae alias, ducimus consequuntur doloribus commodi? Eum doloribus, et iste voluptas nemo repellat? Maiores animi, voluptate deleniti iste eaque repudiandae sunt?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} className='card-profile'>
                            <CardHeader avatar={
                                <Avatar>E</Avatar>

                            }
                                title='Ezequiel Souza'
                                subheader='ezequieloliveiraes@outlook.com'
                            />
                            <CardMedia
                                image='https://source.unsplash.com/random?wallpapers'
                                title='Ezequiel Oliveira'
                            />
                        </Card>
                        <Box >
                            <Typography component='h6' variant='h6' className='box-text' fontWeight='600'>
                                Localização
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product