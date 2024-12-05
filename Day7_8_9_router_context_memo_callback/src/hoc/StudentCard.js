import React from "react";

const StudentCard = ({ student }) => {
  console.log("Rendering StudentCard");
  return (
    <div>
      <h3>{student.name}</h3>
      <p>{student.age} years old</p>
    </div>
  );
};

export default StudentCard;
