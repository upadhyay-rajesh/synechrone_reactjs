
import React, { Component } from 'react';

class Signup extends Component {
   state={
        username: "",
        email: "",
        password: "",
    };

    render() { 
    return (
        <div>
            <h2>Signup</h2>
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                   
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                   
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
}

export default Signup;
