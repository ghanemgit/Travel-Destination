import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav>
            <Link to='/' className='LinkStyle'>Home</Link>
        </nav>
    );
}

export default Navbar;