import React, {useState} from "react";
function StudentRecords({s,name,sendtoparent}) {
   
    return (
        <div>
           
            <h2>Student Records</h2>
            <ul>
               
                {s.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} years old
                    </li>
                ))}
            </ul>
           
        </div>
    );
}

export default StudentRecords;
