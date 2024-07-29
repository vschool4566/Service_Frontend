import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
        c_password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, phoneNumber, password, c_password } = formData;

        if (password !== c_password) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("https://service-backend-1.onrender.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstname, lastname, email, phoneNumber, password })
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phoneNumber: "",
                    password: "",
                    c_password: ""
                });
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error("Error during sign-up:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section className="signup">
            <div className="signupdetails">
                <div className="formDetails">
                    <h1>Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input_field">
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                spellCheck="false"
                            />
                            <label htmlFor="firstname">First Name</label>
                        </div>
                        <div className="input_field">
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                spellCheck="false"
                            />
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                        <div className="input_field">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                spellCheck="false"
                            />
                            <label htmlFor="email">Enter Email</label>
                        </div>
                        <div className="input_field">
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                spellCheck="false"
                            />
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                        <div className="input_field">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                spellCheck="false"
                            />
                            <label htmlFor="password">Enter Password</label>
                        </div>
                        <div className="input_field">
                            <input
                                type="password"
                                name="c_password"
                                value={formData.c_password}
                                onChange={handleChange}
                                required
                                spellCheck="false"
                            />
                            <label htmlFor="c_password">Confirm Password</label>
                        </div>
                        <div className="input_field">
                            <button type="submit">Sign Up</button>
                            <div className="signupOthLinks">
                                <span>Already a member?<NavLink to="#">Login</NavLink></span>&nbsp;&nbsp;
                                <span><NavLink to="/">Go to Homepage</NavLink></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
