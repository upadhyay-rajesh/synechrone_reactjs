import React from 'react';
import StudentProvider from './context/StudentProvider';
import StudentList from './context/StudentList';
import AddStudent from './context/AddStudent';

function App() {
  return (
    <StudentProvider>
      <div>
        <h1>Student Management</h1>
        <StudentList />
        <AddStudent />
      </div>
    </StudentProvider>
  );
}

export default App;
