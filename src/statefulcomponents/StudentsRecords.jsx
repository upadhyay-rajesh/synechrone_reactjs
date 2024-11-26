import React, { Component } from 'react';
import './displaystudent.css';

class StudentRecords extends Component {
    state = { 
       students: [
            {st_id:'ss001', st_name:'Rajesh',st_age:41,st_city:'Bengeluru'},
            {st_id:'ss002', st_name:'Rajesh1',st_age:23,st_city:'Chennai'},
            {st_id:'ss003', st_name:'Rajesh2',st_age:22,st_city:'Mumbai'},
            {st_id:'ss004', st_name:'Rajesh3',st_age:21,st_city:'Hyderabad'},
        ]
     } 
    render() { 
        return (
            <div className="mymaindiv">
                <h1 className="hh">Student Record</h1>
                <table border="5">
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Student Age</th>
                        <th>Student_City</th>
                    </tr>
                    {
                        this.state.students.map((s1)=>(
                            <tr>
                                <td>{s1.st_id}</td>
                                <td>{s1.st_name}</td>
                                <td>{s1.st_age}</td>
                                <td>{s1.st_city}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        );
    }
}
 
export default StudentRecords;