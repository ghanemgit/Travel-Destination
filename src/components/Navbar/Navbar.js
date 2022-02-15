import './Navbar.css'
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav>
            <Link to='/' className='LinkStyle'>Home</Link>
        </nav>
    );
}

export default Navigation;