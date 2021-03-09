import {Link} from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = ({id, title, imgLink, rating, releaseDate}) => {
    return (
        <Link to={`/movie/${id}`} className="movie-card">
            <span className="card-rating">{rating}</span>
            <div className="card-img-holder">
                <img src={imgLink} alt="movie-card" className="card-img"/>
            </div>
            <h2 className="card-title">{title}</h2>
            <h5 className="card-date">{releaseDate}</h5>
        </Link>
    );
}

export default MovieCard;