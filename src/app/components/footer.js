import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Link from 'next/link'


const Footer = () => {

    return (
        <Container maxWidth='lg' component='footer' className='container-footer'>
            <Divider className='divider-two' />
            <Grid container spacing={3} className='content-footer'>
                <Grid item xs={6} sm={3}>
                    <Box color='grey'>
                        <Link href='#' className='link'>
                            <Typography className='text-footer' variant='subtitle1'>Ajuda e Contato </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box color='grey'>
                        <Link href='#' className='link'>
                            <Typography className='text-footer' variant='subtitle1'>Dicas de segurança</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box color='grey' >
                        <Link href='#' className='link'>
                            <Typography className='text-footer' variant='subtitle1'>Anunciar e Vender</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box color='grey'>
                        <Link href='#' className='link'>
                            <Typography className='text-footer' variant='subtitle1'>Plano Profissional</Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )

}

export default Footer