
import './TourDetails.css'
import { useParams } from 'react-router-dom';
import Data from '../../data/db.json';
import SeeMore from './seeMore';
import { useState } from "react";

function ShowCityDetails() {
    const { id } = useParams();

    const [see_more, set_see_more] = useState(false);

    const handleSeeMore = () => {
        set_see_more(!see_more);
    }
    if (see_more) {
        return (
            <>
                <div className='container'>
                    {Data.filter((list) => list.id === id).map((element) => (

                        <div key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h2>City : {element.name} </h2>
                            <p className='paragraph'>{element.info}</p>
                            <h2>Price : {element.price} $</h2>
                            <SeeMore see_more={see_more} handleSeeMore={handleSeeMore} />
                            <hr></hr>
                        </div>


                    ))}
                </div>


            </>


        );
    } else {
        return (
            <>
                <div className='container'>
                    {Data.filter((list) => list.id === id).map((element) => (

                        <div key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h2>City : {element.name} </h2>
                            <SeeMore see_more={see_more} handleSeeMore={handleSeeMore} />
                            <hr></hr>
                        </div>


                    ))}
                </div>


            </>
        );
    }
}



export default ShowCityDetails;

