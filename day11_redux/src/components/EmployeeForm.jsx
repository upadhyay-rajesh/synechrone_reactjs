// components/EmployeeForm.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../redux/actions";

const EmployeeForm = ({ currentEmployee, clearCurrentEmployee }) => {
  const [formData, setFormData] = useState({ id: "", name: "", email: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentEmployee) {
      setFormData(currentEmployee);
    }
  }, [currentEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id) {
      // Update Employee
      dispatch(updateEmployee(formData));
    } else {
      // Add Employee
      dispatch(addEmployee({ ...formData, id: Date.now() }));
    }

    setFormData({ id: "", name: "", email: "" });
    clearCurrentEmployee();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData.id ? "Edit Employee" : "Add Employee"}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <button type="submit">Save</button>
      {currentEmployee && (
        <button type="button" onClick={clearCurrentEmployee}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default EmployeeForm;
