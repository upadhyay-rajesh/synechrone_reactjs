import React, { Component } from 'react';

import Signup from "./statefulcomponents/Signup";
import Signin from "./statefulcomponents/Signin";
import StudentRecords from "./statefulcomponents/StudentsRecords";
import Newsfeed from "./statefulcomponents/Newsfeed";
import "./App.css";

class AppStateful extends Component {
    render(){
    return (
        <div className="container">
            <div className="signup">
                <h2>Signup</h2>
                <Signup />
            </div>
            <div className="signin">
                <h2>Signin</h2>
                <Signin />
            </div>
            <div className="student-records">
                <h2>Student Records</h2>
                <StudentRecords />
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
