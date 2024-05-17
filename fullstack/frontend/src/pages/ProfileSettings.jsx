import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../components/Loading/Loading";
import image_settings from "../assets/images/settings.png";

// Services
import apiLogin from "../services/apiLogin";
import { getUserIdFromLocalStorage } from "../services/logged_userId";

export default function ProfileSettings() {
  const navigate = useNavigate();

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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [deleteError, setDeleteError] = useState("");

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
        // console.error("Error fetching user:", error);
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
      // console.error("Error updating user data:", error);
      // Handle error: Display error message or perform appropriate action
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== "Oui") {
      setDeleteError('Vous devez taper "Oui" pour confirmer.');
      return;
    }

    try {
      await apiLogin.deleteUser(userId);
      // Log out the user and redirect to the login page or home page
      // Assuming there is a logout function
      navigate("/logout");
    } catch (error) {
      setDeleteError(
        "Une erreur s'est produite lors de la suppression de votre compte."
      );
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

      <div
        className={`main-banner ${showDeleteModal ? "blur-background" : ""}`}
      >
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
                          fois que vous désir.
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

                          <div className="row mt-4 d-flex justify-content-center">
                            <div className="col-lg-10">
                              <fieldset>
                                <div className="delete-account-text-wrapper">
                                  <span>
                                    Vous souhaitez supprimer votre compte ?
                                  </span>
                                  <div
                                    className="delete-account-text"
                                    onClick={() => setShowDeleteModal(true)}
                                  >
                                    Supprimer Compte
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                        {successMessage && (
                          <div className="text-success" role="alert">
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
                <div className="row d-flex justify-content-center">
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

      {showDeleteModal && (
        <>
          <div className="dialog-background"></div>
          <div className="modal show">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirmer la suppression</h5>
                </div>
                <div className="modal-body">
                  <p>
                    Veuillez taper "Oui" pour confirmer la
                    suppression de votre compte.
                  </p>
                  <input
                    type="text"
                    className={`form-control ${deleteError && "is-invalid"}`}
                    value={deleteConfirmation}
                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                  />
                  {deleteError && (
                    <div className="invalid-feedback mt-3">{deleteError}</div>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDeleteAccount}
                  >
                    Supprimer le compte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
