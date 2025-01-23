import React from 'react'
import NavBar from "../components/NavBar";


function Login(){
    return(
        <div>
            <header>
            <NavBar/>
            </header>
            <main>
                <h1>Login</h1>
                <form>
                    <div>
                        <label for="username">Username: </label>
                        <input id="username" type="text" name="username" placeHolder="Type name here" />
                    </div>
                    <div>
                        <label for="password">Password: </label>
                        <input id="password" type="password" name="password" placeHolder="Type password here" />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Login;