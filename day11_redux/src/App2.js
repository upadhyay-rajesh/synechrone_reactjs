import React, {useState} from "react";
import Signup from "./statelesscomponents/Signup";
import Signin from "./statelesscomponents/Signin";
import StudentRecords from "./statelesscomponents/StudentsRecords";
import Newsfeed from "./statelesscomponents/Newsfeed";
import "./App.css";

/*const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 19 },
];
*/
function App() {

    const[students,setStudents]=useState([
        { id: 1, name: "Alice", age: 20 },
        { id: 2, name: "Bob", age: 22 },
        { id: 3, name: "Charlie", age: 19 },
    ]);

    const addItem = (newdata) => {
        setStudents([...students, newdata]); // Add new item
    };

    return (
        <div className="container">
            <div className="signup">
                <h2>Signup</h2>
                <Signup />
            </div>
            <div className="signin">
                <h2>Signin</h2>
                <Signin s={students} />
            </div>
            <div className="student-records">
                <h2>Student Records</h2>
                <StudentRecords s={students} name='Mohan' sendtoparent={addItem} />
            </div>
            <div className="newsfeed">
                <h2>Newsfeed</h2>
                <Newsfeed />
            </div>
        </div>
    );
}

export default App;
