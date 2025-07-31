import Header from "../components/Header";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import SignupCard from "../components/SignupCard";
import LoginCard from "../components/LoginCard";
import { useState } from "react";

function Login() {
    const [showlogin, setShowlogin] = useState(false);
    const [showsignup, setShowsignup] = useState(false);

    return(
        <main>
            <Header></Header>
        
        <div class="card">
            <h2>Welcome to Eventory</h2> <br/>
                <form>
                    <button type="button" onClick={(e) => setShowsignup(true)}>Sign Up</button>
                    <h4>Or</h4>
                    <button type="button" onClick={(e) => setShowlogin(true)}>Log In </button>
                </form><br/>
            </div>


            <Popup open={showlogin} onClose={() => setShowlogin(false)} modal nested>

                {close => (
                    <div class="popup">
                        <LoginCard></LoginCard>
                        <button type="button" onClick={(e) => {
                        e.preventDefault();
                        close();
                        } }>Close</button>
                    </div>
                )}
            </Popup>

            <Popup open={showsignup} onClose={() => setShowsignup(false)} modal nested>

                {close => (
                    <div class="popup">
                        <SignupCard></SignupCard>
                        <button type="button" onClick={(e) => {
                        e.preventDefault();
                        close();
                        } }>Close</button>
                    </div>
                )}
            </Popup>
        </main>
        
    )
}

export default Login;