import React, { useState } from "react";
import '../assets/css/main.css'
import Section1Img from '../assets/images/section1img.png'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { NavLink,useNavigate } from "react-router-dom";

export default function Homepage() {
    //navbar
    const [openNav,setOpenNav]=useState(false)
    const navigate=useNavigate()
    return (
        <>
            <section className="firstSection">
               <div className="mainNav">
                    <nav>
                        <div className="homeLogo">
                            <h1>Service Harbour</h1>
                        </div>
                        <ul className={openNav ? "active":""}>
                            <li><NavLink to="#">Home</NavLink></li>
                            <li><NavLink to="#">About us</NavLink></li>
                            <li><NavLink to="#">Services</NavLink></li>
                            <li><NavLink to="#">Career</NavLink></li>
                        </ul>
                        <div className="navBar" onClick={()=>{
                            setOpenNav(!openNav)
                        }}>
                            <HiBars3BottomLeft/>
                        </div>
                    </nav>
               </div>
                <div className="mainContent">
                    <div className="content">
                        <h1>Service Harbour</h1>
                        <p>Our business connects users with service providers for tasks such as cleaning, gardening, and home repairs. Users can book services, view provider profiles, and manage appointments online, while providers can offer their services and receive bookings through the platform.</p>
                        <button className="HomeButtons" onClick={()=>navigate('/signup')}>Join now</button>
                    </div>
                    <div className="mainImage">
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