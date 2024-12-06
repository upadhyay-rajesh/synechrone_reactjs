import React from "react";
import { useForm } from "react-hook-form";

function FormWithReactHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Email is invalid",
                        },
                    })}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormWithReactHookForm;