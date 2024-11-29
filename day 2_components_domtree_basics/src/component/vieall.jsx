import React, { Component } from 'react';

class VieAll extends Component {
    state = { 
        name : 'Abc',
        age: 41,
        city:'Benguluru'
     } 
    render() { 
        return (
            <div>
                {45+89}
                {this.state.name} <br></br>
                {this.state.age}<br></br>
                {this.state.city}
            </div>
        );
    }
}
 
export default VieAll;