import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

import image_settings from "../assets/images/settings.png";

export default function ProfileSettings() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Paramètres de profil";
  }, []); // This effect runs only once after the initial render

  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword1: "",
    newPassword2: "",
    receiveEmail: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const { email, oldPassword, newPassword1, newPassword2 } = formData;
    const errors = {};
    if (!email || !email.match(/[^@]+@[^@]+\.[^@]+/)) {
      errors.email = "Email address is invalid";
    }
    if (!oldPassword) {
      errors.oldPassword = "Please enter your old password";
    }
    if (!newPassword1 || newPassword1.length < 6) {
      errors.newPassword1 = "Password must be at least 6 characters long";
    }
    if (newPassword1 !== newPassword2) {
      errors.newPassword2 = "Passwords do not match";
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
          <div className="row mb-4">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="left-content show-up header-text">
                    <div className="row">
                      <div className="col-lg-8">
                        <h6>Bienvenue dans votre section</h6>
                        <h2>Paramètres</h2>
                        <p>
                          Vous pouvez modifier vos paramètres de profil chaque
                          fois que vous désir.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row show-up d-flex justify-content-center">
            <div className="col-10">
              <form id="contact" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="fill-form">
                      <div className="row d-flex justify-content-center align-items-center">
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
                              name="oldPassword"
                              id="oldPassword"
                              className={`form-control ${
                                errors.oldPassword && "is-invalid"
                              }`}
                              placeholder="Old password"
                              value={formData.oldPassword}
                              onChange={handleChange}
                              required
                            />
                            {errors.oldPassword && (
                              <div className="invalid-feedback">
                                {errors.oldPassword}
                              </div>
                            )}
                          </fieldset>
                          <fieldset>
                            <input
                              type="password"
                              name="newPassword1"
                              id="newPassword1"
                              className={`form-control ${
                                errors.newPassword1 && "is-invalid"
                              }`}
                              placeholder="New password"
                              value={formData.newPassword1}
                              onChange={handleChange}
                              required
                            />
                            {errors.newPassword1 && (
                              <div className="invalid-feedback">
                                {errors.newPassword1}
                              </div>
                            )}
                          </fieldset>
                          <fieldset>
                            <input
                              type="password"
                              name="newPassword2"
                              id="newPassword2"
                              className={`form-control ${
                                errors.newPassword2 && "is-invalid"
                              }`}
                              placeholder="Repeat new password"
                              value={formData.newPassword2}
                              onChange={handleChange}
                              required
                            />
                            {errors.newPassword2 && (
                              <div className="invalid-feedback">
                                {errors.newPassword2}
                              </div>
                            )}
                          </fieldset>
                          <fieldset>
                            <div className="pr-checkbox mt-4 row">
                              <div className="col-lg-8">
                                <label htmlFor="receiveEmail">
                                  Receive the diagnostic result in your email
                                </label>
                              </div>
                              <div className="col">
                                <div className="left-content">
                                  <input
                                    type="checkbox"
                                    id="receiveEmail"
                                    name="receiveEmail"
                                    checked={formData.receiveEmail}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img src={image_settings} alt="" />
                  </div>
                </div>
                <div
                  className="row d-flex justify-content-center"
                  style={{ marginTop: "-20px" }}
                >
                  <div className="col-lg-4 mb-5">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="btn btn-primary"
                      >
                        Save
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
