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

import '../../../globals.scss'
import TempateDefault from '../../../templates/Default'
import Card from "@/app/components/Card"

const List = () => {
    return (
        <TempateDefault>
            <Container maxWidth='lg'>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper className='search-box'>
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
                    <Box className='box-list' >
                        <Typography component='h6' variant='h6'>
                            Anúncios
                        </Typography>
                        <Typography component='h6' variant='subtitle2'>
                            ENCONTRADOS 200 ANÚNCIOS
                        </Typography>
                        <br/><br/>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}md={4}>
                                    <Card
                                    image={'https://source.unsplash.com/random?wallpapers?a=1'}
                                    title='Produto X'
                                    subtitle='R$ 60,00'
                                    />
                            </Grid>
                            <Grid item xs={12} sm={6}md={4}>
                                    <Card
                                    image={'https://source.unsplash.com/random?wallpapers?a=1'}
                                    title='Produto X'
                                    subtitle='R$ 60,00'
                                    />
                            </Grid>
                            <Grid item xs={12} sm={6}md={4}>
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

        </TempateDefault>
    )
}

export default List