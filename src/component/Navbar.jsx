import React from "react";
import "./Component.scss";
import Netflix from "../images/Netflix_2015_logo.svg.png";

import { FaSearch, FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <img src={Netflix} alt="netflix logo" />
        <div className="navbar-logos">
          <FaHome className="navbar---components" />
          <FaSearch className="navbar---components" />
        </div>
      </div>
    </>
  );
}
