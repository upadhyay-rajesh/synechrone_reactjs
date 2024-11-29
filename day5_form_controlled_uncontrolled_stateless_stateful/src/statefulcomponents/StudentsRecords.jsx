import React, { Component } from 'react';
import './displaystudent.css';

class StudentRecords extends Component {
    state = { 
       pp:this.props.st,
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
                       

                        this.props.st.map((s1)=>(
                            <tr>
                                <td>{s1.st_id}</td>
                                <td>{s1.st_name}</td>
                                <td>{s1.st_age}</td>
                                <td>{s1.st_city}</td>
                            </tr>
                        ))

                        
                    }
                    {
                        this.state.pp.map((s1)=>(
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