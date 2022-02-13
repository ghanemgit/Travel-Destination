import './Tours.css'

function cityData(props) {

    return (
        <>
            <div className='container'>
                {props.data.map(element => {
                    return (

                        <p>
                            <img src={element.image} alt={element.name} />
                            <h2>City : {element.name} </h2>
                            <hr></hr>
                        </p>



                    );
                })}

            </div>

        </>
    );
}





export default cityData;
