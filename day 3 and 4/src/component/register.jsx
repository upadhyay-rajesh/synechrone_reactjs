import React, { Component } from 'react';

import LoginComponent from './login';

class RegisterComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                Register Page

                <LoginComponent></LoginComponent>
            </div>
        );
    }
}
 
export default RegisterComponent;