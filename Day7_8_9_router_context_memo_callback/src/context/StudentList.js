import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';

const StudentList = () => {
  const { students } = useContext(StudentContext); // Access the students from context

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} (Age: {student.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
