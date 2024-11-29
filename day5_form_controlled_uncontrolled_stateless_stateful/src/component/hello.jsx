import React, { Component } from 'react';
import './hello.css';
class Hello extends Component {
    state = { 
        students: [
            { st_id: 1, st_name: 'Rajesh', st_age: 43, st_city:'Bengeluru', st_salary:45000 },
            { st_id: 2, st_name: 'Dhruv', st_age: 18 , st_city:'Chennai', st_salary:45000},
            { st_id: 3, st_name: 'Shivangi', st_age: 22, st_city:'Mumbai', st_salary:45000 },
        ]
     } 
    render() { 
        return (
            <div class="mdiv">
                <table border="5" class='t1'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    { this.state.students.map(s1=>(
                         <tr>
                            <td>{s1.st_name}</td>
                            <td>{s1.st_age}</td>
                          </tr>
                    ))
                   
                     }
                </table>
                
               
            </div>
        );
    }
}
 
export default Hello;