import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <h4 style={{ color: "green", marginBottom: "0.8rem" }}>Contact Details</h4>
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div><p>Kothi Road, Nawalgarh</p><p>Rajasthan</p></div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />6376538745</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />rahulsingh4626l@gmail.com</h4>
                    </div>
                </div>
                <div className="project-summary">
                    <h4>Projects</h4>
                    {/* <div className="projects">
                        <ul><li><span></span></li></ul>
                    </div> */}
                </div>
                <div className="right"><h4>About</h4></div>
            </div>
        </div>
    )
}

export default Footer
