import HomeProfileCard from "./HomeProfileCard";
import TrendingEventsCard from "./TrendingEventsCard";
import Header from "./Header";
import Feed from "./Feed";

function CombinedInterface(){
    return(
        <main>
            <Header/>

            <div className="cards-container">
                <HomeProfileCard/>
                <Feed/>
                <TrendingEventsCard/>
            </div>
        </main>
    )
}

export default CombinedInterface