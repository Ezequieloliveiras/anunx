
import Header from '../components/header'

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