import React from "react";

import logo from "../../assets/images/logo.png";

function Navbar() {
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
              <a href="" className="logo">
                <img src={logo} alt="" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Accueil
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">À propos</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#tools">IA</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact">Contact</a>
                </li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <a href="#contact">Diagnostic</a>
                  </div>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
