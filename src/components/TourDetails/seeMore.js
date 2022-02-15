import './seeMore.css'

function SeeMoreStatus(props) {

    return (
        props.see_more ? <button onClick={props.handleSeeMore} className='button'>see less</button> :
            <button onClick={props.handleSeeMore} className='button'>see more</button>
    );
}

export default SeeMoreStatus;