import React, { useState } from "react";

function FormWithValidation() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form inputs
    const validate = () => {
        let formErrors = {};

        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully:", formData);
            setFormData({ name: "", email: "" }); // Reset form
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormWithValidation;