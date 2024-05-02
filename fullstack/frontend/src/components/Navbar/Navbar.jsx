import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { getUserIdFromLocalStorage } from "../../services/logged_userId";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsActive(!isActive);
    // Toggling menu display
    const nav = document.querySelector(".header-area .nav");
    if (nav) {
      nav.style.display = isActive ? "none" : "block";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if it's open and the window width is greater than 767px
      if (window.innerWidth > 767 && isActive) {
        toggleMenu();
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive]);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <div className="outsideLogo">
                <Link to="/" className="logo">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <ul className={`nav ${isActive ? "active" : ""}`}>
                <li className="nav-logo">
                  <Link to="/" className="logo">
                    <img src={logo} alt="" />
                  </Link>
                </li>
                <div className="centered-nav-items">
                  <li>
                    <NavLink to="/home" activeclassname="active">Accueil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/community" activeclassname="active">Communauté</NavLink>
                  </li>
                  {getUserIdFromLocalStorage() == null && (
                    <li>
                      <NavLink to="/login" activeclassname="active">Login</NavLink>
                    </li>
                  )}
                  {getUserIdFromLocalStorage() != null && (
                    <>
                      <li>
                        <NavLink to="/history" activeclassname="active">Historique</NavLink>
                      </li>
                      <li>
                        <NavLink to="/settings" activeclassname="active">Settings</NavLink>
                      </li>
                      <li>
                        <NavLink to="/logout" activeclassname="active">Logout</NavLink>
                      </li>
                    </>
                  )}
                </div>
                <li className="nav-item">
                  <div className="border-first-button">
                    <NavLink to="/diagnostic" className="nav-link" activeclassname="active">
                    Diagnostique
                    </NavLink>
                  </div>
                </li>
              </ul>
              <div
                className={`menu-trigger ${isActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span>Menu</span>
              </div>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
