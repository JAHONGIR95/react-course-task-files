import { Link } from 'react-router-dom';

import logo from '../../assets/Images/Icons/cinerama.svg';

import './Header.scss';
 
const Header = () => {
    return(
        <div className="header">

            <div className="container">

            <Link to="/" className="header-logo">
                <img src={logo} className="logo" alt="Logo"/>                
            </Link>

            <div className="header-links">
                <Link to="/movies" className="header-link">Movies</Link>
                <Link to="/tv-shows" className="header-link">TV Shows</Link>
                <Link to="/latest-movies" className="header-link">Latest Movies</Link>
                <Link to="/top-movies" className="header-link">Top Movies</Link>
                <Link to="/upcoming-movies" className="header-link">Upcoming Movies</Link>
            </div>

            <form className="header-form">
                <input type="search" className="header-input" placeholder="Input here"/>
                <button type="submit" className="header-search-btn">🔍</button>
            </form>

            </div>
            
        </div>
       
        
    );
}

export default Header;