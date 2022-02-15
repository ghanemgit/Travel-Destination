
import Navbar from '../Navbar/Navbar'
import './Header.css'
import logo from '../../Plogo.png'
function Header(props) {

    return (
        <>
            <div className="Intro">
                <img src={logo} alt="lgog" className='img'></img>
                <h1>Travel Destination</h1>
                <h2>Travel Destination application where you can see a list of the most visited places around the world.</h2>
            </div>
            <Navbar />


        </>
    );
}


export default Header;