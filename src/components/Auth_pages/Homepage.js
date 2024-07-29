import React from "react";
import '../assets/css/main.css'
import Section1Img from '../assets/images/section1img.png'

export default function Homepage() {
    return (
        <>
            <section className="firstSection">
                <div className="navBar_section">
                    <div className="logoName">
                        <h5>Service Harbor</h5>
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Service</li>
                            <li>Contact us</li>
                            <li>Career</li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <button className="HomeButtons">Login</button>
                    </div>
                </div>
                <div className="section1Content">
                    <div className="content">
                        <h1>Service Harbour</h1>
                        <p>The Service project connects users with service providers for tasks like cleaning and gardening, allowing bookings, online payments, and reviews. Workers subscribe, manage services, and receive payments, with the platform earning from subscriptions and service fees.
                        </p>
                        <button className="HomeButtons">Signup</button>
                    </div>
                    <div className="images">
                        <img src={Section1Img} alt="" />
                    </div>
                </div>
            </section>
            <section className="secondSection">
                <h1>Second Section</h1>
            </section>
            <section className="thirdSection">
                <h1>Third Section</h1>
            </section>
            <section className="fourthSection">
                <h1>Fourth Section</h1>
            </section>
            <footer className="footerSection">
                <h1>Footer Section</h1>
            </footer>
        </>
    )
}