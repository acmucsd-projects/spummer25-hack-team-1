import { useState } from "react";
import Header from "../components/Header";
function Search() {
    const [search, setSearch] = useState("");
    const [triggerSearch, setTriggerSearch] = useState(false);

    function showSearchResults(){
        if(search === "" || !triggerSearch){
            return(<p>Search Eventory</p>);
        }

        return(
            <p>Showing Search Results for "{search}"</p>
        )
    }
    return(
        <main>
            <Header></Header>
            
            <div className="card">
                <h2>{showSearchResults()}</h2> 
                <input type="text" placeholder="Type Anything"  
                onChange={(e) => 
                {setSearch(e.target.value); setTriggerSearch(false)}}></input> <br/> <br/>
                <button onClick={(e) => setTriggerSearch(true)}>Search</button>
            </div>

        </main>
    )
}

export default Search;