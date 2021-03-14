import { Link } from 'react-router-dom';

import './Footer.scss';

import logo from '../../assets/Images/Icons/cinerama.svg';
import {
    Facebook,
    Twitter,
    Telegram
} from '../../components/MediaIcons/MediaIcons';

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

            <div className="footer-media">
                <Link to="/tele" className="footer-media"><img src={Facebook} alt="facebook"/></Link>
                <Link to="/tele" className="footer-media"><img src={Twitter} alt="twitter"/></Link>
                <Link to="/tele" className="footer-media"><img src={Telegram} alt="telegram"/></Link>
            </div>
                <h1>Footer</h1>
            </div>
        </div>
    )
}

export default Footer;