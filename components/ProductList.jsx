'use client'

import {
    Container,
    Grid,
    IconButton,
    Paper,
    InputBase,
    Typography,
    Box
} from "@mui/material"

import Search from "@mui/icons-material/Search"

import TempateDefault from '../templates/Default'
import Card from '../components/js/Card'

const List = () => {
    return (
        <TempateDefault>
            <Container maxWidth='lg'
                sx={{
                    marginTop: '50px'
                }}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '10px 20px',
                            }}>
                            <InputBase
                                placeholder='Ex.: Iphone XS Max com garantia'
                                fullWidth
                            />
                            <IconButton type='submit' aria-label='search'>
                                <Search />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            margintop: '30px',
                            padding: '30px',
                            marginTop: '50px',
                            borderRadius: '5px'
                        }} >
                        <Typography component='h6' variant='h6'>
                            Anúncios
                        </Typography>
                        <Typography component='h6' variant='subtitle2'>
                            ENCONTRADOS 200 ANÚNCIOS
                        </Typography>
                        <br /><br />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?wallpapers?a=1'}
                                    title='Produto X'
                                    subtitle='R$ 60,00'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?wallpapers?a=1'}
                                    title='Produto X'
                                    subtitle='R$ 60,00'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?wallpapers?a=1'}
                                    title='Produto X'
                                    subtitle='R$ 60,00'
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

            </Container>

        </TempateDefault >
    )
}

export default List