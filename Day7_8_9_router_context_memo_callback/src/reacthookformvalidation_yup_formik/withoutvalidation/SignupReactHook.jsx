import React from "react";
import { useForm } from "react-hook-form";
function SignupReactHookForm({ onAddData }) {
    const { register, handleSubmit, reset } = useForm(); 

    const onSubmit = (data) => {
        onAddData(data); // Send data to parent
        reset(); // Reset the form fields
    };
    return (
        <div>
            <h2>Child Form Component</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="number" {...register("password")} />
                </div>
		<div>
                    <label>Email:</label>
                    <input type="text" {...register("email")} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="number" {...register("address")} />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default SignupReactHookForm;