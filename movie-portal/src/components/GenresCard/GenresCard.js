import './GenresCard.scss';

const GenresCard = ({Janri}) => {
    return (
        <div className="genre-holder">
            <h4 className="movie-genre">{Janri}</h4>
        </div>
    )
}

export default GenresCard;