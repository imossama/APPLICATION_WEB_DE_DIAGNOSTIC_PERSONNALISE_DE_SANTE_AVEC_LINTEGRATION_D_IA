import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

import image_register from "../assets/images/register.png";

export default function Register() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Page d'inscription'";
  }, []); // This effect runs only once after the initial render

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const { email, password, confirmPassword } = formData;
    const errors = {};
    if (!email || !email.match(/[^@]+@[^@]+\.[^@]+/)) {
      errors.email = "Email address is invalid";
    }
    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Don't submit if there are errors
    }
    // Form submission logic here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-5 align-self-center">
                  {" "}
                  {/* Modify here - align-self-center*/}
                  <div className="left-content show-up header-text">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Welcome to our application</h6>
                        <h2>S'inscrire</h2>
                        <p>
                          Si vous avez un compte, vous pouvez se connecter.
                          Cliquez simplement sur le bouton ci-dessous.{" "}
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-first-button scroll-to-section">
                          <Link to="/login">Se connecter</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="right-image">
                    <form id="contact" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="fill-form">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-lg-5">
                                <img src={image_register} alt="" />
                              </div>
                              <div className="col-lg-12">
                                <fieldset>
                                  <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className={`form-control ${
                                      errors.email && "is-invalid"
                                    }`}
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                  />
                                  {errors.email && (
                                    <div className="invalid-feedback">
                                      {errors.email}
                                    </div>
                                  )}
                                </fieldset>
                                <fieldset>
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={`form-control ${
                                      errors.password && "is-invalid"
                                    }`}
                                    placeholder="Your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                  />
                                  {errors.password && (
                                    <div className="invalid-feedback">
                                      {errors.password}
                                    </div>
                                  )}
                                </fieldset>
                                <fieldset>
                                  <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className={`form-control ${
                                      errors.confirmPassword && "is-invalid"
                                    }`}
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                  />
                                  {errors.confirmPassword && (
                                    <div className="invalid-feedback">
                                      {errors.confirmPassword}
                                    </div>
                                  )}
                                </fieldset>
                              </div>

                              <div className="col-lg-4">
                                <fieldset>
                                  <button
                                    type="submit"
                                    id="form-submit"
                                    className="btn btn-primary"
                                  >
                                    Register
                                  </button>
                                </fieldset>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
