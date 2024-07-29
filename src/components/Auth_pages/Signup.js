import React from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <section className="signup">
                <div className="signupdetails">
                    <div className="formDetails">
                        <h1>Sign up</h1>
                        <form action="#">
                            <div className="input_field">
                                <input type="text" name="Firstname" required spellCheck="false" />
                                <label htmlFor="Firstname">First Name</label>
                            </div>
                            <div className="input_field">
                                <input type="text" name="Lastname" required spellCheck="false" />
                                <label htmlFor="Lastname">Last Name</label>
                            </div>
                            <div className="input_field">
                                <input type="email" name="email" required spellCheck="false" />
                                <label htmlFor="email">Enter Email</label>
                            </div>
                            <div className="input_field">
                                <input type="number" name="phNumber" required spellCheck="false" />
                                <label htmlFor="phNumber">Phone number</label>
                            </div>
                            <div className="input_field">
                                <input type="password" name="password" required spellCheck="false" />
                                <label htmlFor="password">Enter password</label>
                            </div>
                            <div className="input_field">
                                <input type="password" name="c_password" required spellCheck="false" />
                                <label htmlFor="c_password">Confirm password</label>
                            </div>
                            <div className="input_field">
                                <button>Sign up</button>
                                <div className="signupOthLinks">
                                    <span>Already a member?<NavLink to="#">Login</NavLink></span>&nbsp;&nbsp;
                                    <span><NavLink to="/">Go to Homepage</NavLink></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}