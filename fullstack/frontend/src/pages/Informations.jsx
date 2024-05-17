import React, { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import { getUserIdFromLocalStorage } from "../services/logged_userId";
import { savePersonalData, getPersonalDataById } from "../services/apiPersonal"; // Import the service functions

import image_pers_data from "../assets/images/pers-data.png";

export default function Informations(props) {
  const [formData, setFormData] = useState({
    userId: getUserIdFromLocalStorage(), // Retrieve the user ID from localStorage
    first_name: "",
    last_name: "",
    date: "",
    gender: "",
    profession: "",
    about: "",
    ...props.formData,
  });

  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "SANTÉIA - Informations";

    // Fetch personal data if userId exists
    async function fetchData() {
      try {
        const data = await getPersonalDataById(formData.userId);
        setFormData((prevState) => ({
          ...prevState,
          ...data,
        }));
      } catch (error) {
        // console.error("Error fetching personal data:", error);
      }
    }

    // Call the async function
    fetchData();
  }, [formData.userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextClick = async () => {
    if (validateForm()) {
      // setLoading(true);
      try {
        await savePersonalData(formData);
        props.handleNextStep(formData);
      } catch (error) {
        // console.error("Error saving personal data:", error);
        setFormError(
          "Une erreur s'est produite lors de la sauvegarde des données personnelles."
        );
      }
    } else {
      setFormError("Veuillez remplir tous les champs du formulaire.");
      setTimeout(() => {
        setFormError("");
      }, 3000);
    }
  };

  // Validation function to check if all fields are filled
  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {loading && <Loading />}

      <div className="main-banner">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="col-lg-5 align-self-center">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>Informations Personnelles</h6>
                      <h2>Étape 1</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-image mt-5">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="fill-form">
                        <div className="row d-flex justify-content-center align-items-center">
                          <div className="col-lg-5">
                            <img src={image_pers_data} alt="" />
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                placeholder="Nom"
                                value={formData.first_name}
                                onChange={handleChange}
                              />
                            </fieldset>
                            <fieldset>
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder="Prénom"
                                value={formData.last_name}
                                onChange={handleChange}
                              />
                            </fieldset>
                            <fieldset>
                              <input
                                type="date"
                                name="date"
                                id="date"
                                placeholder="Date de naissance"
                                value={formData.date}
                                onChange={handleChange}
                              />
                            </fieldset>
                            <fieldset>
                              <select
                                name="gender"
                                id="gender"
                                onChange={handleChange}
                                value={formData.gender}
                              >
                                <option value="" disabled>
                                  Choisissez votre genre
                                </option>
                                <option value="male">Homme</option>
                                <option value="female">Femelle</option>
                                <option value="other">Autre</option>
                              </select>
                            </fieldset>
                            <fieldset>
                              <input
                                type="text"
                                name="profession"
                                id="profession"
                                onChange={handleChange}
                                placeholder="Votre profession"
                                value={formData.profession}
                              />
                            </fieldset>
                            <fieldset>
                              <textarea
                                name="about"
                                type="text"
                                className="form-control"
                                id="about"
                                onChange={handleChange}
                                placeholder="Au propos de vous"
                                maxLength="300"
                                value={formData.about}
                              ></textarea>
                            </fieldset>

                            {formError && (
                              <p className="text-danger mt-3">{formError}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="row justify-content-center">
                  <div className="col-lg-3">
                    <fieldset>
                      <button
                        className="stylishButton"
                        onClick={handleNextClick}
                      >
                        Suivante
                      </button>
                    </fieldset>
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
