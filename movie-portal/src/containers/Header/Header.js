import { Link } from 'react-router-dom';

import './Header.scss';
 
const Header = () => {
    return(
        <div className="header">

            <div className="container">

            <Link to="/" className="header-logo">
                <img src="" alt="Logo"/>
            </Link>

            <div className="header-links">
                <Link to="/movies" className="header-link">Movies</Link>
                <Link to="/tv-shows" className="header-link">TV Shows</Link>
            </div>

            <form className="header-form">
                <input type="search" className="header-input" placeholder="Input here"/>
                <button type="submit" className="header-search-btn">Search</button>
            </form>

            </div>
            
        </div>
       
        
    );
}

export default Header;