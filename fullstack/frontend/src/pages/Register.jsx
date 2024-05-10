import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../components/Loading/Loading";

// Assets
import image_register from "../assets/images/register.png";

// Services
import apiRegister from "../services/apiRegister";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Page d'inscription";
  }, []); // This effect runs only once after the initial render

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [registrationError, setRegistrationError] = useState(""); // State for registration error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
    // Clear registration error when user changes input
    setRegistrationError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    const { email, password, confirmPassword } = formData;
    const errors = {};
    if (!email || !email.match(/[^@]+@[^@]+\.[^@]+/)) {
      errors.email = "Adresse email invalide.";
    }
    if (!password || password.length < 6) {
      errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Don't submit if there are errors
    }
    try {
      // Check if email already exists
      const emailExists = await apiRegister.checkEmailExists(email);
      if (emailExists != null) {
        setErrors({
          email: "L'email existe déjà. Veuillez utiliser un autre email.",
        }); // Set error message if email exists
      } else {
        // Form submission logic here (e.g., send data to server)
        // console.log("Form submitted:", formData);

        await apiRegister.register({ email, password }); // Use userService to register user
        // Optionally, you can redirect the user to the login page or show a success message
        // console.log("User registered successfully.");

        // Redirect to the desired route
        navigate("/community");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setRegistrationError(
        "Une erreur s'est produite lors de l'enregistrement. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-5 align-self-center">
                  <div className="left-content show-up header-text">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Bienvenue dans notre application</h6>
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
                                    placeholder="Votre e-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    // required
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
                                    placeholder="Votre mot de passe"
                                    value={formData.password}
                                    onChange={handleChange}
                                    // required
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
                                    placeholder="Confirmer votre mot de passe"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    // required
                                  />
                                  {errors.confirmPassword && (
                                    <div className="invalid-feedback">
                                      {errors.confirmPassword}
                                    </div>
                                  )}
                                </fieldset>
                                {registrationError && (
                                  <div className="text-danger mt-3">
                                    {registrationError}
                                  </div>
                                )}
                              </div>

                              <div className="col-lg-4">
                                <fieldset>
                                  <button
                                    type="submit"
                                    id="form-submit"
                                    className="btn btn-primary"
                                  >
                                    S'inscrire
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
    </div>
  );
}
