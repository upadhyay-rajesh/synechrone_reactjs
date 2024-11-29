import React, { useState } from "react";

function Signup({ setView }) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [name, setName]=useState("Rajesh");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signup Successful!");
        setView("signin"); // Redirect to signin
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
