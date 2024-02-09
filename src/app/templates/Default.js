import Header from '../components/header'

import '../globals.scss'

const Default = ({children}) => {
    return (
      
        <div>
        <Header />
        {children}
        <footer>FOOTER</footer>
        </div>

    )
}

export default Default