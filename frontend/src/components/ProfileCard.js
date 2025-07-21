import '../styles.css';

function ProfileCard(props){
    console.log(props);
    return (
        <div className = "profile-card">
            <div className = "pfp-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png" alt="User Profile Picture" className="pfp"/>
                <div className="pfp-name-college">
                    <h2>{props.name}</h2>
                    <h2>{props.college}</h2>
                </div>

            </div>
            <div class = "profile-information">
                <p>Email: {props.email}</p>
                <p>Name: {props.name}</p>
                <p>Current Year: {props.year}</p>
            </div>
        </div>
    )
}

export default ProfileCard;