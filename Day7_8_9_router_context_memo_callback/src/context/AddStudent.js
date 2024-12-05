import React, { useState, useContext } from 'react';
import { StudentContext } from './StudentContext';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const { addStudent } = useContext(StudentContext); // Access the addStudent function from context

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addStudent({ name, age: parseInt(age) });
      setName('');
      setAge('');
    }
  };

  return (
    <div>
      <h2>Add a New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
