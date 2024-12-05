import React, { useState } from "react";
import StudentCard from "./hoc/StudentCard";
import withMemoization from "./hoc/withmemo";
const MemoizedStudentCard = withMemoization(StudentCard);
const App = () => {
  const [students, setStudents] = useState([
    { name: "John", age: 18 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 20 }
  ]);
  const [filter, setFilter] = useState("");
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter students by name"
      />
      <div>
        {filteredStudents.map((student, index) => (
          <MemoizedStudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
};

export default App;
