import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

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
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
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
                <li className="scroll-to-section">
                  <Link
                    to="/#top"
                    className={activeSection === "top" ? "active" : ""}
                  >
                    Accueil
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link
                    to="/#about"
                    className={activeSection === "about" ? "active" : ""}
                  >
                    À propos
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link
                    to="/#services"
                    className={activeSection === "services" ? "active" : ""}
                  >
                    Services
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link
                    to="/#tools"
                    className={activeSection === "tools" ? "active" : ""}
                  >
                    IA
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link
                    to="/#contact"
                    className={activeSection === "contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <Link to="/" className="">
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
