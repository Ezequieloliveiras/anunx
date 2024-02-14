"use client"

import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material'

import TemplateDefault from '../../../templates/Default'
import { styled } from '@mui/system'


const StyledContainer = styled(Container, Button)(({ theme }) => ({ // Esta é uma função de estilo que recebe o tema como argumento desestruturado
  padding: theme.spacing(8, 0, 6),
  Button: {
    margin: '30px auto',
    display: 'block',
  },
}));

export default function HomeUser() {

  return (
    <TemplateDefault>
      <StyledContainer maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center'>
          Meus Anúncios
        </Typography>
        <Button variant='contained' color='inherit'>
          Publicar novo anúncio
        </Button>
      </StyledContainer>
      <Container maxWidth='lg' >
        <Grid container spacing= {4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia image={'https://source.unsplash.com/random'} style={{paddingTop:'56%'}}
                title='Titulo da imagem' />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='inherit'>
                    Editar
                  </Button>
                  <Button size='small' color='inherit'>
                    Remover
                  </Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia image={'https://source.unsplash.com/random'} style={{paddingTop:'56%'}}
                title='Titulo da imagem' />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='inherit'>
                    Editar
                  </Button>
                  <Button size='small' color='inherit'>
                    Remover
                  </Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia image={'https://source.unsplash.com/random'} style={{paddingTop:'56%'}}
                title='Titulo da imagem' />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='inherit'>
                    Editar
                  </Button>
                  <Button size='small' color='inherit'>
                    Remover
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
