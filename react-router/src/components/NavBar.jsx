import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <ul className="myLinks">
          <Link to="/" className="myTitle">
            Mighty Morphin Power Rangers
          </Link>{" "}
          <br />
          <li>
            <Link to="/blue">Blue</Link>
          </li>
          <li>
            <Link to="/red">Red</Link>
          </li>
          <li>
            <Link to="/pink">Pink</Link>
          </li>
          <li>
            <Link to="/green">Green</Link>
          </li>
          <li>
            <Link to="/yellow">Yellow</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
