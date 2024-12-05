import React, { Component } from 'react';

class DisplayStatefulComponent extends Component {
    state = {  } 
    render() { 
        return (<div>
            <table border="5">
                <tr>
                    <th>Name</th><th>Password</th><th>Email</th><th>Address</th>
                </tr>
                {
                    this.props.mydata.map((o1)=>(
                        <tr>
                            <td>{o1.name}</td>
                            <td>{o1.password}</td>
                            <td>{o1.email}</td>
                            <td>{o1.address}</td>
                        </tr>
                    ))
                }
            </table>
        </div>);
    }
}
 
export default DisplayStatefulComponent;