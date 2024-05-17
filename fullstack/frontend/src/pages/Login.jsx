import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../components/Loading/Loading";

// Assets
import image_login from "../assets/images/login.png";

// Services
import apiLogin from "../services/apiLogin";
import { setUserIdToLocalStorage } from "../services/logged_userId";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Page de connexion";
  }, []); // This effect runs only once after the initial render

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(""); // New state for login error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    // Make handleSubmit asynchronous
    e.preventDefault();
    // Perform validation
    const { email, password } = formData;
    const errors = {};
    if (!email || !email.match(/[^@]+@[^@]+\.[^@]+/)) {
      errors.email = "Adresse email invalide";
    }
    if (!password || password.length < 6) {
      errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Don't submit if there are errors
    }
    try {
      const user = await apiLogin.login(email, password); // Use apiLogin to check credentials
      if (user) {
        // Login successful, handle further actions (e.g., redirect to dashboard)
        // console.log("Login successful:", user);
        setUserIdToLocalStorage(user.id);

        // Redirect to the desired route
        navigate("/community");
      } else {
        // Login failed, set login error message
        setLoginError("Email ou mot de passe invalide.");
      }
    } catch (error) {
      // console.error("Error during login:", error);
      // Handle error if login service fails
      setLoginError(
        "Une erreur s'est produite pendant la connexion. Veuillez réessayer plus tard."
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
                        <h6>Bienvenue à notre application</h6>
                        <h2>Se connecter</h2>
                        <p>
                          Si vous n'avez pas de compte, vous pouvez en créer un
                          facilement. Cliquez simplement sur le bouton
                          ci-dessous.{" "}
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-first-button scroll-to-section">
                          <Link to="/register">S'inscrire</Link>
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
                            <div className="row d-flex justify-content-center align-items-center">
                              <div className="col-lg-5">
                                <img src={image_login} alt="" />
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
                                {loginError && (
                                  <div className="text-danger mt-3">
                                    {loginError}
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
                                    Se connecter
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
