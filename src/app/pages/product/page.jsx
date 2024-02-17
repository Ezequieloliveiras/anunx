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

const Product = () => {
    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box sx={{
                            backgroundColor: '#ffffff',
                            marginBottom: '30px',
                            textAlign: 'left',
                            padding: '24px'
                        }}>
                            <Carousel
                                autoPlay
                                animation='slide'
                            >
                                <Card
                                    sx={{
                                        height: '100%'
                                    }}
                                >
                                    <CardMedia
                                        sx={{ paddingTop: '56%' }}
                                        image='https://source.unsplash.com/random?wallpapers?a=1'
                                        title='Titulo da imagem'
                                    />
                                </Card>
                                <Card
                                    sx={{
                                        height: '100%'
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            paddingTop: '56%'
                                        }}
                                        image='https://source.unsplash.com/random?wallpapers?a=2'
                                        title='Titulo da imagem'
                                    />
                                </Card>
                                <Card
                                    sx={{
                                        height: '100%'
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            paddingTop: '56%'
                                        }}
                                        image='https://source.unsplash.com/random?wallpapers?a=3'
                                        title='Titulo da imagem'
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: '#ffffff',
                                padding: '20px'
                            }}>
                            <Typography component='span' variant='caption'>
                                Publicado 16 de junho de 2021
                            </Typography>
                            <Typography component='h4' variant='h4'
                                sx={{
                                    margin: '15px 0',
                                }}>
                                Jaguar XE 2.0 D R-Sport Aut.
                            </Typography>
                            <Typography component='h4' variant='h4'
                                sx={{
                                    price: '15px',
                                }}>
                                R$ 50.000,00
                            </Typography>
                            <Chip label='Categoria' />
                        </Box>

                        <Box sx={{
                            marginTop: '30px',
                            backgroundColor: '#ffffff',
                            padding: '20px',
                        }}>
                            <Typography component='h6' variant='h6' fontWeight='600'>Descrição</Typography>
                            <Typography component='p' variant='body2'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vitae alias, ducimus consequuntur doloribus commodi? Eum doloribus, et iste voluptas nemo repellat? Maiores animi, voluptate deleniti iste eaque repudiandae sunt?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0}
                            sx={{
                                padding: '30px 20px',
                            }}>
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
                            <Typography component='h6' variant='h6'
                                sx={{
                                    marginTop: '30px',
                                    backgroundColor: '#fffff',
                                    padding: '20px',
                                }} fontWeight='600'>
                                Localização
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault >
    )
}

export default Product