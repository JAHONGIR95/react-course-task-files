import searchIcon from '../../Assets/images/icons/search.svg';
import billIcon from '../../Assets/images/icons/bill.svg';
import authorPhoto from '../../Assets/images/author.png';

import './Header.scss';

const Header = ({activePage}) => {
    return (
        <div className="header">
            <div className="header-left">{ activePage }</div>
            <div className="header-right">
                <img src={searchIcon} alt="" className="search-icon"/>
                <img src={billIcon} alt="" className="bill-icon"/>
                <h4 className="header-name">Jones Ferdinand</h4>
                <img src={authorPhoto} alt="" className="header-author"/>
            </div>
        </div>
    )
}

export default Header;