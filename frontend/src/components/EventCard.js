function EventCard(props){
    return (
        <div className="card">
            <div className="event-content">

                <div className = "text-event"><h2>{props.name}</h2>    
                    <h4>{props.organizer}</h4> 
                    <p>{props.description}</p> <br/>   
                </div>
                
                <div className="button-event">
                    <button>Like</button>
                    <button>Track</button>
                    <button>Share</button>
                </div>
                
            </div>

        </div>
    )
}

export default EventCard;