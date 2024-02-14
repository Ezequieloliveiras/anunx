import { Container } from '@mui/material'

import Header from '../components/header'
import Footer from '../components/footer'
import '../globals.scss'

const Default = ({ children }) => {
    return (

        <div>
            <Header />
            <Container className='container'>
                {children}
            </Container>
            <Footer />
        </div>

    )
}

export default Default