import React, { useState } from 'react';
import { StudentContext } from './StudentContext';

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 18 },
    { id: 2, name: 'Jane Smith', age: 19 },
    { id: 3, name: 'Alice Johnson', age: 20 },
  ]);

  // Function to add a new student
  const addStudent = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
