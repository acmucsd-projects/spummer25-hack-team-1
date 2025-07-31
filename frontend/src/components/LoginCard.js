import { useState } from "react";

function LoginCard(){
    const [email, setEmail] = useState("");

    return(
            <div class="card">
                <form class="card-content">
                <h2>Login in to Eventory</h2>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                <button>Login In</button></form></div>    )
}

export default LoginCard;