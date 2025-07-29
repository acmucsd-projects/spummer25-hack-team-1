import Header from "../components/Header";
import EventCard from "../components/EventCard";

function Home() {
    return(
        <main>
            <Header></Header>
            <h1>Home</h1>

            <EventCard
            name="ACM Spummer Showcase"
            organizer="ACM"
            description="Summer Project showcase"
            ></EventCard>
        </main>
    )
}

export default Home;