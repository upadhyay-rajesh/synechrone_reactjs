import React, { useState } from "react";

function Signin({ setView,s }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signin Successful!");
        setView("students"); // Redirect to student records after signin
    };

    return (
        <div>
            <h2>Student Records</h2>
            <ul>
               
                {s.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} years old
                    </li>
                ))}
            </ul>
            <h2>Signin</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Signin</button>
            </form>
        </div>
    );
}

export default Signin;
