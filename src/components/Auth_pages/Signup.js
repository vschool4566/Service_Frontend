import React from "react";

export default function Signup(){
    return(
        <>
            <section className="signup">
                <div className="signupdetails">
                    <div className="formDetails">
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
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}