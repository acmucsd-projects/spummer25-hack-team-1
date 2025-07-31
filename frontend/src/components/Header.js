import { Link } from "react-router-dom";
function Header(){
    return (
        <header>
            <Link to="/profile" class="link">Profile</Link>
            <Link to="/" class="link">Home</Link>
            <Link to="/map" class="link">Map</Link>
            <Link to="/search" class="link">Search</Link>
        </header>
    )
}

export default Header;