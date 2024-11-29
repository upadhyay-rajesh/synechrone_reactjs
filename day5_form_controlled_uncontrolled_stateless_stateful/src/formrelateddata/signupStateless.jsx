import React, { useState } from "react";

function SignUpStateless({ childtoparent }) {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email:"",
        address:""
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        childtoparent(formData); // Pass form data to parent
        setFormData({ name: "", password: "",email:"",address:"" }); // Reset form
    };

    return (
        <div>
            <h2>SignUp Page</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="button" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default SignUpStateless;