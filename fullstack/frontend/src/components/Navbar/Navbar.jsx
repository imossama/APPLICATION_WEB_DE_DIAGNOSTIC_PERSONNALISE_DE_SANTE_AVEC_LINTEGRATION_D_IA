import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { isLoggedIn } = useAuth();

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
              <ul className="nav">
                <li className="nav-logo">
                  <Link to="/" className="logo">
                    <img src={logo} alt="" />
                  </Link>
                </li>
                <div className="centered-nav-items">
                  <li>
                    <NavLink to="/home" activeclassname="active">
                      Accueil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/community" activeclassname="active">
                      Communauté
                    </NavLink>
                  </li>
                  {!isLoggedIn && (
                    <li>
                      <NavLink to="/login" activeclassname="active">
                        Login
                      </NavLink>
                    </li>
                  )}
                  {isLoggedIn && (
                    <>
                      <li>
                        <NavLink to="/history" activeclassname="active">
                          Historique
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/settings" activeclassname="active">
                          Settings
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/logout" activeclassname="active">
                          Logout
                        </NavLink>
                      </li>
                    </>
                  )}
                </div>
                <div className="border-first-button">
                  <NavLink
                    to="/diagnostic"
                    className="nav-link"
                    activeclassname="active"
                  >
                    Diagnostic
                  </NavLink>
                </div>
              </ul>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
