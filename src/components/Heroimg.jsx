import React from 'react'
import { Link } from 'react-router-dom';
import Introimg from "../assets/portfolio.jpg"
import "./HeroStyling.css";
const Heroimg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img src={Introimg} className="into-img" alt="Introimg" />
            </div>
            <div className="content">
                <p>HI, MYSELF RAHUL</p>
                <h1>Full Stack Developer.</h1>
                <div>
                    <Link to="/project" className='btn'>Project</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg
