import { Link } from 'react-router-dom';
import './Actors.scss';

const Actors = ({id, imgLink, name}) => {
    return(

        <Link to={`/movie/${id}`} className="actors-holder">
            <div className="actor-img-holder">
                <img src={`https://image.tmdb.org/t/p/w500${imgLink}`} alt="Actor-image" className="actor-img"/>
            </div>
            <h3 className="actor-name">{name}</h3>
        </Link>
    )
}

export default Actors;