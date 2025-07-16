import Header from "../components/Header";

function Login() {
    return(
        <main>
            <Header></Header>
            
        <h1>Welcome to Eventory</h1>
        
        <div class="card">
                <form class="card-content">
                    <button>Sign Up</button>
                    <h2>Or</h2>
                    <button>Log In</button>
                </form>
            </div>
        </main>
        
    )
}

export default Login;