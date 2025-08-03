import { Link } from "react-router-dom";
import '../styles.css';
import homeIcon from "../assets/home-icon.png";
import profileIcon from "../assets/profile.png";
import mapIcon from "../assets/map.png";
import searchIcon from "../assets/search.png";



function Header(){
    return (
        <header>
            <Link to="/profile" class="link"><img src={profileIcon} alt="Profile" width="25" height="25"/></Link>
            <Link to="/" class="link"><img src={homeIcon} alt="Home" width="25" height="25"/></Link>
            <Link to="/map" class="link"><img src={mapIcon} alt="Map" width="25" height="25"/></Link>
            <Link to="/search" class="link"><img src={searchIcon} alt="Search" width="20" height="20"/></Link>
        </header>
    )
}

export default Header;