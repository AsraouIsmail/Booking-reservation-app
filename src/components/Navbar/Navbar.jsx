/* eslint-disable no-unused-vars */
import "./Navbar.css"
import React from 'react'
import {
  faHotel
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
          <span className="logo"> <FontAwesomeIcon icon={faHotel} /> Royal Hotel booking.com</span>
        <div className="navItems">
          <button className="navButton">S'inscrire</button>
          <button className="navButton">Se connecter</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar