import { Container } from '@mui/material'

import Header from '../components/js/Header'
import Footer from '../components/js/Footer'

const Default = ({ children }) => {
    return (

        <div>
            <Header />
            <Container sx={{ margin: 'none' }}>
                {children}
            </Container>
            <Footer />
        </div>

    )
}

export default Default