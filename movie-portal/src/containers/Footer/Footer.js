import { Link } from 'react-router-dom';

import './Footer.scss';

import logo from '../../assets/Images/Icons/cinerama.svg';
import {
    Facebook,
    Twitter,
    Telegram,
} from '../../components/MediaIcons/MediaIcons';

console.log(Facebook);

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
            <Link to="/" className="footer-logo">
                <img src={logo} className="logo" alt="Logo"/>                
            </Link>

            <div className="footer-links">
                <Link to="/movies" className="footer-link">Movies</Link>
                <Link to="/tv-shows" className="footer-link">TV Shows</Link>
                <Link to="/latest-movies" className="footer-link">Latest Movies</Link>
                <Link to="/top-movies" className="footer-link">Top Movies</Link>
                <Link to="/upcoming-movies" className="footer-link">Upcoming Movies</Link>
            </div>

            <p className="footer-guarantee">
                All rights are reserved. <br/> Website is created in 2021.  
            </p>

            {/* <div className="footer-media">
                <Link to="/tele" className="footer-media-link"><img src={Facebook} alt="facebook"/></Link>
                <Link to="/tele" className="footer-media-link"><img src={Twitter} alt="twitter"/></Link>
                <Link to="/tele" className="footer-media-link"><img src={Telegram} alt="telegram"/></Link>
            </div> */}
                
            </div>
        </div>
    )
}

export default Footer;