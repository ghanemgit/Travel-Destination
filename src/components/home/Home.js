import './Home.css';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import TourDetails from '../TourDetails/TourDetails'
import Footer from '../footer/Footer';



import { Routes, Route } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='HomeStyle'>
                <Header />
                <Routes>
                    <Route path='/' element={<Tours />} />
                    <Route path='/city/:id' element={<TourDetails />} />
                </Routes>

                <Footer />

            </div>

        </>


    );
}


export default Home;