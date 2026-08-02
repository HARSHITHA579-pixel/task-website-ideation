import React from 'react';
import './Navbar.css';
import fire from '../../assets/fire.png';
import star from '../../assets/star.png';
import love from '../../assets/heart_eyes.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Cinephilia</h1>

        <div className="navbar-links">
            <a href="">Popular <img src={fire} alt="fire emoji" className="navbar-emoji" /></a>
            <a href="">Top Rated <img src={star} alt="star emoji" className="navbar-emoji" /></a>
            <a href="">Upcoming <img src={love} alt="love emoji" className="navbar-emoji" /></a>
        </div>
    </nav>
  )
}

export default Navbar
