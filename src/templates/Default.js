import { Container } from '@mui/material'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Default = ({ children }) => {
    return (

        <div>
            <Header />
            <Container sx={{margin:'none'}}>
                {children}
            </Container>
            <Footer />
        </div>

    )
}

export default Default