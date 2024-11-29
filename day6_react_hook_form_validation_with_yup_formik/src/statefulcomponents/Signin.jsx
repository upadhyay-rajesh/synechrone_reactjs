
import React, { Component } from 'react';

class Signin extends Component {
    state={
        email: "hello@gmail.com",
        password: "",
    };

    
    render() { 
    return (
        <div>
            <h2>Signin</h2>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                   
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                   
                />
                <button type="submit">Signin</button>
            </form>
        </div>
    );
}
}

export default Signin;
