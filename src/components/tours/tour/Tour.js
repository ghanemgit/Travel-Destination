import './Tour.css';
import { Link } from 'react-router-dom';
import Tours from '../Tours';


function Tour(props) {

    return (
        <>

            <div className='container'>
                {props.data.map(element => {
                    return (
                        <Link to={`/city/${element.id}`} className='linkStyleTour'>
                            <div key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h2>City : {element.name} </h2>
                                <hr className='hrStyle'></hr>
                            </div>
                        </Link>
                    );
                })}

            </div>

        </>
    );
}





export default Tour;


