import React, { Component } from 'react';
import './displaystudent.css';
import StudentService from '../service/StudentService';

class StudentRecords extends Component {
    state = { 
       pp:[],
     } 


     componentDidMount(){
       StudentService.getAllRecord().then((response)=>{
        console.log(response.data);
        this.setState({pp:response.data});
     })
     }


    render() { 
        return (
            <div className="mymaindiv">
                <h1 className="hh">Student Record</h1>
                <table border="5">
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Student PassWord</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                  
                    {
                        this.state.pp.map((s1)=>(
                            <tr>
                                <td>{s1.id}</td>
                                <td>{s1.name}</td>
                                <td>{s1.address.street}</td>
                                <td>{s1.email}</td>
                                <td>{s1.address.city}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        );
    }
}
 
export default StudentRecords;