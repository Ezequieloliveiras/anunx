'use client'

import SearchIcon from '@mui/icons-material/Search';

import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@mui/material'

import './globals.scss'
import TemplateDefault from './templates/Default'

const Home = () => {

  return (
    <>
      <TemplateDefault>
        <Container maxWidth='md' className='searchContainer'>
          <Typography component='h1' variant='h3' align='center' color='textPrimary'>
            O que deseja encontrar?
          </Typography>
          <Paper className='searchBox'>
            <InputBase
              placeholder='Ex. iphone 12 com garatia'
              fullWidth
            />
            <IconButton >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
        <Container maxWidth='lg' className='cardGrid'>
        <Typography component='h2' variant='h4' align='center' color='textPrimary'>
            Destaques
          </Typography>
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia image={'https://source.unsplash.com/random'} className='cardMedia'
                  title='Titulo da imagem' />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia image={'https://source.unsplash.com/random'} className='cardMedia'
                  title='Titulo da imagem' />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia image={'https://source.unsplash.com/random'} className='cardMedia'
                  title='Titulo da imagem' />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  )
}

export default Home