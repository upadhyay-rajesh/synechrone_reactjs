import React from "react";
import Signup from "./statelesscomponents/Signup";
import Signin from "./statelesscomponents/Signin";
import StudentRecords from "./statelesscomponents/StudentsRecords";
import Newsfeed from "./statelesscomponents/Newsfeed";
import "./App.css";

function App() {
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

export default App;
