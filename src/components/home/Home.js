import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import Data from '../../data/db.json';

function render() {
    return (
        <>
            <Header />
            <Tours data={Data} />
            <Footer />
        </>


    );
}


export default render;