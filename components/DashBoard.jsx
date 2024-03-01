"use client"

import {
  Button,
  Container,
  Grid,
  Typography,
  Link,
} from '@mui/material'

import TemplateDefault from '../templates/Default'
import Card from '../components/js/Card'

export default function Dashboard() {

  return (
    <TemplateDefault>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center'>
          Meus Anúncios
        </Typography>
        <Link href='/dashboard/publish' sx={{ textDecoration: 'none', color: '#000000' }}>
          <Button variant='contained' color='inherit'
            sx={{
              margin: '30px auto',
              display: 'block',
            }}
          >
            Publicar novo anúncio
          </Button>
        </Link>
      </Container>
      <Container maxWidth='lg' >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Produto x'
              subtitle=' R$ 60,00'
              actions={
                <>
                  <Button size='small' color='inherit'>
                    Editar
                  </Button>
                  <Button size='small' color='inherit'>
                    Remover
                  </Button>
                </>
              }
            >
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Produto x'
              subtitle=' R$ 60,00'
              actions={
                <>
                  <Button size='small' color='inherit'>
                    Editar
                  </Button>
                  <Button size='small' color='inherit'>
                    Remover
                  </Button>
                </>
              }
            >
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title='Produto x'
              subtitle=' R$ 60,00'
              actions={
                <>
                  <Button size='small' color='inherit'>
                    Editar
                  </Button>
                  <Button size='small' color='inherit'>
                    Remover
                  </Button>
                </>
              }
            >
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
