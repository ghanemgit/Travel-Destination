import './Tour.css';
import { Link } from 'react-router-dom';



function cityDataTour(props) {

    return (
        <>

            <div className='container'>
                {props.data.map(element => {
                    return (
                        <Link to={`/city/${element.id}`} className='linkStyle'>
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





export default cityDataTour;


