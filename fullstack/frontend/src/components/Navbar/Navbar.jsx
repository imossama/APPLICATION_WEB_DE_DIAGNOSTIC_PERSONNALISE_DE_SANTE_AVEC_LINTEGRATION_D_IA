import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Assets
import logo from "../../assets/images/logo.png";

// Service
import { getUserIdFromLocalStorage } from "../../services/logged_userId";

function Navbar() {
  const location = useLocation();
  if (["/", "/home", "/index"].includes(location.pathname)) {
    const [activeSection, setActiveSection] = useState("top");
  }
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Get the position of each section
      const aboutSection = document.getElementById("about").offsetTop;
      const servicesSection = document.getElementById("services").offsetTop;
      const toolsSection = document.getElementById("tools").offsetTop;
      const contactSection = document.getElementById("contact").offsetTop;

      // Determine which section is in view
      if (scrollPosition < aboutSection) {
        setActiveSection("top");
      } else if (
        scrollPosition >= aboutSection &&
        scrollPosition < servicesSection
      ) {
        setActiveSection("about");
      } else if (
        scrollPosition >= servicesSection &&
        scrollPosition < toolsSection
      ) {
        setActiveSection("services");
      } else if (
        scrollPosition >= toolsSection &&
        scrollPosition < contactSection
      ) {
        setActiveSection("tools");
      } else {
        setActiveSection("contact");
      }
    };

    if (["/", "/home", "/index"].includes(location.pathname)) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/" className="logo">
                <img src={logo} alt="" />
              </Link>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}

              <ul className="nav">
                <li>
                  <Link to="/home">Accueil</Link>
                </li>

                <li>
                  <Link to="/community">Communauté</Link>
                </li>

                <li>
                  <Link to="/login">Se connecter</Link>
                </li>

                {getUserIdFromLocalStorage() == null && (
                  <li className="nav-item-log" title="Login">
                    <Link to="/login">
                      <i className="fas fa-key"></i>
                    </Link>
                  </li>
                )}

                {getUserIdFromLocalStorage() != null && (
                  <>
                    <li className="nav-item-log" title="Settings">
                      <Link to="/settings">
                        <span>Settings</span>
                        <i className="fas fa-gear"></i>
                      </Link>
                    </li>
                    <li
                      className="nav-item-log"
                      title="Logout"
                      style={{ marginLeft: 0 }}
                    >
                      <Link to="/logout">
                        <span>Logout</span>
                        <i className="fas fa-door-open"></i>
                      </Link>
                    </li>
                  </>
                )}

                <li className="nav-item float-left">
                  <div className="border-first-button">
                    <Link to="/steps" className="nav-link">
                      Diagnostic
                    </Link>
                  </div>
                </li>
              </ul>

              <Link className="menu-trigger">
                <span>Menu</span>
              </Link>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
