import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

function Profile() {
    return(
        <body>
            <Header></Header>
            <ProfileCard 
                name="Rohan Madan"
                college="Seventh"
                email="rmadan@ucsd.edu"
                year="Sophomore"
            />
        </body>
        
    )
}

export default Profile;