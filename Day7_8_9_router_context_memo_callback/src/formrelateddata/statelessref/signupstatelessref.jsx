import React, { useState,useRef } from "react";

function SignUpStatelessRef({ childtoparent }) {
    const nameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    /*
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
*/
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: nameRef.current.value, 
            password: passwordRef.current.value,
            email: emailRef.current.value, 
            address: addressRef.current.value,
        };
        childtoparent(formData); // Pass form data to parent
        //event.target.reset(); // Reset form
    };

    return (
        <div>
            <h2>SignUp Page</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        ref={nameRef}
                       
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        ref={passwordRef}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        ref={emailRef}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        ref={addressRef}
                    />
                </div>
                <button type="button" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default SignUpStatelessRef;