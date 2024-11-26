import React from "react";

const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 19 },
];

function StudentRecords() {
    return (
        <div>
            <h2>Student Records</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentRecords;
