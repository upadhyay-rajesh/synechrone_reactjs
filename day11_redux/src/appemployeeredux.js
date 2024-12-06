// App.js
import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
  };

  const clearCurrentEmployee = () => {
    setCurrentEmployee(null);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm
        currentEmployee={currentEmployee}
        clearCurrentEmployee={clearCurrentEmployee}
      />
      <EmployeeList onEdit={handleEdit} />
    </div>
  );
};

export default App;
