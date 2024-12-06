// components/EmployeeList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions";

const EmployeeList = ({ onEdit }) => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 && <p>No employees to display.</p>}
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} ({emp.email})
            <button onClick={() => onEdit(emp)}>Edit</button>
            <button onClick={() => handleDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
