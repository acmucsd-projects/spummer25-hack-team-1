import '../styles.css';
import profileIcon from "../assets/profile.png";
import calendarIcon from "../assets/schedule.png"

function HomeProfileCard(props){
    return (
        <div className = "profile-card-home">
            <div className = "info-home">
                <img src={profileIcon} alt="User Profile Picture" className="pfp-home"/>
                <div className="home-name-college">
                    <h3>Rohan Madan{props.name}</h3>
                    <h3>Seventh{props.college}</h3>
                </div>

            </div>
            <div className = "profile-information-home">
                <h5>Saved Events</h5>
                <h5>Your Organizations</h5>
                <h5>Messenger</h5>
            </div>
        </div>
    )
}
{/* <img src={calendarIcon} alt="Saved Events" className="icons"/> */}

export default HomeProfileCard;