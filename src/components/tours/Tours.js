import './Tours.css';
import Tour from './tour/Tour';
import Data from '../../data/db.json';



function Tours() {



    return (
        <>

            <Tour data={Data} />


        </>
    );
}

export default Tours;
