'use client'

import SearchIcon from '@mui/icons-material/Search';

import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@mui/material'

import TemplateDefault from '../templates/Default'
import Card from '../components/js/Card';

const HomePage = () => {

  return (
    <>
      <TemplateDefault>
        <Container maxWidth='lg' className='searchContainer' >
          <Typography component='h1' variant='h3' align='center' color='textPrimary'>
            O que deseja encontrar?
          </Typography>
          <Paper className='searchBox' sx={{display:'flex', padding:'5px', margin:'20px 0px'}}>
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
          <Typography component='h2' variant='h4' align='center' color='textPrimary' sx={{marginTop:'60px'}}>
            Destaques
          </Typography>
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto x'
                subtitle=' R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto x'
                subtitle=' R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto x'
                subtitle=' R$ 60,00'
              />
            </Grid>
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  )
}

export default HomePage