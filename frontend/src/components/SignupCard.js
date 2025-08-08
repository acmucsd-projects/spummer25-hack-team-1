import { useState } from "react";


function SignupCard() {
    const [college, setCollege] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gradYear, setGradYear] = useState("");

    const colleges = ["Revelle", "Muir", "Marshall", "Warren", "ERC", "Sixth", "Seventh", "Eighth"]
    const gradYears = ["2026", "2027", "2028","2029", "Grad Student", "Other"]
    
    return(
            <div className="card">
                <h2>Sign up to Eventory</h2>
                <div className="card-content">
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>

                <select onChange={(e) => setCollege(e.target.value)}>
                {colleges.map((d, i) =>
                    <option key={i}>{d}</option>
                )}
                </select>

                <select onChange={(e) => setGradYear(e.target.value)}>
                {gradYears.map((d, i) =>
                    <option key={i}>{d}</option>
                )}
            </select></div>

            <button>Sign Up</button></div>
    )
}

export default SignupCard;