import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { Button } from "../UI/Button";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => {
    setClick(false);
  };
  const clickHandler = () => {
    setClick(!click);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          {/* link is similar to a tag , href ki jaga to= ka tag */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdFingerprint className="navbar-icon"></MdFingerprint>
            LAVISH
          </Link>
          <div  className="menu-icon" onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          {/* //yeh wala part jab mobile screen pai lines pai click karoge tou options dekhaaega */}
          {/* //nav-menu is for desktop , nav-menu active is for mobile */}
          <ul className={click ? "nav-menu active" : "nav-menu"}> 
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Product
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP </Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP{" "}
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
