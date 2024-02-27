import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const Footer = () => {

    return (
        <Container maxWidth='lg' component='footer'
            sx={{
                borderTop: '1px solid inherit',
            }}
        >
            <Divider 
                sx={{
                    paddingTop: '50px'
                }}
            />
            <Grid container spacing={3} 
                sx={{
                    paddingTop: '50px',
                    paddingBottom: '50px',
                }}>
                <Grid item xs={6} sm={3}>
                    <Box color='grey'>
                        <Link href='#' style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        >
                            <Typography variant='subtitle1'>Ajuda e Contato </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box color='grey'>
                        <Link href='#' style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        >
                            <Typography variant='subtitle1'>Dicas de segurança</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box color='grey' >
                        <Link href='#' style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        >
                            <Typography variant='subtitle1'>Anunciar e Vender</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box color='grey'>
                        <Link href='#' style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        >
                            <Typography variant='subtitle1'>Plano Profissional</Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    )

}

export default Footer