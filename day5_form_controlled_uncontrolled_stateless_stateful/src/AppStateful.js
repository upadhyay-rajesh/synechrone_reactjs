import React, { Component } from 'react';

import Signup from "./statefulcomponents/Signup";
import Signin from "./statefulcomponents/Signin";
import StudentRecords from "./statefulcomponents/StudentsRecords";
import Newsfeed from "./statefulcomponents/Newsfeed";
import "./App.css";

class AppStateful extends Component {

    state={
        name : 'Synechrone Tech',
        students: [
            {st_id:'ss001', st_name:'Rajesh',st_age:41,st_city:'Bengeluru'},
            {st_id:'ss002', st_name:'Rajesh1',st_age:23,st_city:'Chennai'},
            {st_id:'ss003', st_name:'Rajesh2',st_age:22,st_city:'Mumbai'},
            {st_id:'ss004', st_name:'Rajesh3',st_age:21,st_city:'Hyderabad'},
        ]
    }

    render(){
    return (
        <div className="container">
            <div className="signup">
                <h2>Signup</h2>
                <Signup  myname={this.state.name}   />
            </div>
            <div className="signin">
                <h2>Signin</h2>
                <Signin />
            </div>
            <div className="student-records">
                <h2>Student Records</h2>
                <StudentRecords st={this.state.students} />
            </div>
            <div className="newsfeed">
                <h2>Newsfeed</h2>
                <Newsfeed />
            </div>
        </div>
    );
}
}

export default AppStateful;
