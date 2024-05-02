import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

import image_settings from "../assets/images/settings.png";

// Services
import apiLogin from "../services/apiLogin";
import { getUserIdFromLocalStorage } from "../services/logged_userId";

export default function ProfileSettings() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Paramètres de profil";
  }, []); // This effect runs only once after the initial render

  const userId = getUserIdFromLocalStorage();

  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword1: "",
    newPassword2: "",
    receiveEmail: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await apiLogin.getUser(userId);
        setFormData({
          email: user.email || "",
          oldPassword: "",
          newPassword1: "",
          newPassword2: "",
          receiveEmail: user.receiveEmail || false,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    const { email, oldPassword, newPassword1, newPassword2 } = formData;
    const errors = {};
    if (!email || !email.match(/[^@]+@[^@]+\.[^@]+/)) {
      errors.email = "Adresse email invalide.";
    }
    if (!oldPassword) {
      errors.oldPassword = "Veuillez saisir votre ancien mot de passe.";
    }
    if (!newPassword1 || newPassword1.length < 6) {
      errors.newPassword1 =
        "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (newPassword1 !== newPassword2) {
      errors.newPassword2 = "Les mots de passe ne correspondent pas.";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Don't submit if there are errors
    }

    try {
      // Validate old password
      const isOldPasswordValid = await apiLogin.validateOldPassword(
        userId,
        oldPassword
      );
      if (!isOldPasswordValid) {
        setErrors({ oldPassword: "Ancien mot de passe incorrect." });
        return;
      }

      // Update user data on the server
      await apiLogin.updateUser(userId, { email, password: newPassword1 });

      // Clear form fields
      setFormData({
        email: "",
        oldPassword: "",
        newPassword1: "",
        newPassword2: "",
        receiveEmail: false,
      });

      // Display success message
      setSuccessMessage("Votre profil a été mis à jour avec succès.");

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle error: Display error message or perform appropriate action
    }
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
                              placeholder="Votre e-mail"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {errors.email && (
                              <div className="invalid-feedback mt-3">
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
                              placeholder="Ancien mot de passe"
                              value={formData.oldPassword}
                              onChange={handleChange}
                            />
                            {errors.oldPassword && (
                              <div className="invalid-feedback mt-3">
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
                              placeholder="Nouveau mot de passe"
                              value={formData.newPassword1}
                              onChange={handleChange}
                            />
                            {errors.newPassword1 && (
                              <div className="invalid-feedback mt-3">
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
                              placeholder="Répété le nouveau mot de passe"
                              value={formData.newPassword2}
                              onChange={handleChange}
                            />
                            {errors.newPassword2 && (
                              <div className="invalid-feedback mt-3">
                                {errors.newPassword2}
                              </div>
                            )}
                          </fieldset>
                          <fieldset>
                            <div className="pr-checkbox mt-4 row">
                              <div className="col-lg-8">
                                <label htmlFor="receiveEmail">
                                  Recevoir le résultat de diagnostique dans
                                  votre e-mail
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
                        {successMessage && (
                          <div className="text-success mt-3" role="alert">
                            {successMessage}
                          </div>
                        )}
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
                        Sauvegarder
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
