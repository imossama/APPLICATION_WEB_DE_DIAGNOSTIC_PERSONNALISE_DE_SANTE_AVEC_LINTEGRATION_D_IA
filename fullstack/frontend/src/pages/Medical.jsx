import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

import image_med_data from "../assets/images/medical-data.png";

export default function Medical(props) {
  const { formData } = props;

  const [formError, setFormError] = useState("");

  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Informations sur la santé";
  }, []); // This effect runs only once after the initial render

  // Validation function to check if all radio buttons are selected
  const validateForm = () => {
    const radioGroups = [
      "medical_conditions",
      "allergies",
      "chirurgies",
      "histoire",
    ];

    for (const group of radioGroups) {
      const radios = document.getElementsByName(group);
      let checked = false;
      for (const radio of radios) {
        if (radio.checked) {
          checked = true;
          break;
        }
      }
      if (!checked) {
        return false;
      }
    }
    return true;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      const formData = new FormData(document.getElementById("medical"));
      const formDataObject = {};
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value;
      }

      props.handleNextStep(formDataObject);
    } else {
      setFormError("Veuillez répondre à toutes les questions du formulaire.");
      setTimeout(() => {
        setFormError("");
      }, 3000);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />
      <div className="main-banner">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="col-lg-5 align-self-center">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>Informations sur votre santé</h6>
                      <h2>Étape 2</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-image mt-5">
                <form id="medical" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="fill-form">
                        <div className="row d-flex justify-content-center align-items-center">
                          <div className="col-lg-5">
                            <img src={image_med_data} alt="" />
                          </div>

                          <div className="col-lg-12">
                            <fieldset>
                              <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 d-flex justify-content-lg-start">
                                  <label htmlFor="medical_conditions">
                                    Conditions médicales préexistantes
                                  </label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="yes1"
                                        type="radio"
                                        name="medical_conditions"
                                        value="yes"
                                        required
                                        defaultChecked={
                                          formData &&
                                          formData.medical_conditions === "yes"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="yes1">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="no1"
                                        type="radio"
                                        name="medical_conditions"
                                        value="no"
                                        required
                                        defaultChecked={
                                          formData &&
                                          formData.medical_conditions === "no"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="no1">Non</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          <div className="col-lg-12 mt-4">
                            <fieldset>
                              <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 d-flex justify-content-lg-start">
                                  <label htmlFor="allergies">Allergies</label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="yes2"
                                        type="radio"
                                        name="allergies"
                                        value="yes"
                                        required
                                        defaultChecked={
                                          formData &&
                                          formData.allergies === "yes"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="yes2">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="no2"
                                        type="radio"
                                        name="allergies"
                                        value="no"
                                        required
                                        defaultChecked={
                                          formData &&
                                          formData.allergies === "no"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="no2">Non</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          <div className="col-lg-12 mt-4">
                            <fieldset>
                              <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 d-flex justify-content-lg-start">
                                  <label htmlFor="chirurgies">
                                    Chirurgies ou hospitalisations antérieures
                                  </label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="yes3"
                                        type="radio"
                                        name="chirurgies"
                                        value="yes"
                                        required
                                        defaultChecked={
                                          formData &&
                                          formData.chirurgies === "yes"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="yes3">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="no3"
                                        type="radio"
                                        name="chirurgies"
                                        value="no"
                                        required
                                        defaultChecked={
                                          formData &&
                                          formData.chirurgies === "no"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="no3">Non</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          <div className="col-lg-12 mt-4">
                            <fieldset>
                              <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 d-flex justify-content-lg-start">
                                  <label htmlFor="histoire">
                                    Histoire des maladies
                                  </label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="yes4"
                                        type="radio"
                                        name="histoire"
                                        value="yes"
                                        required
                                        defaultChecked={
                                          formData &&
                                          formData.histoire === "yes"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="yes4">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        id="no4"
                                        type="radio"
                                        name="histoire"
                                        value="no"
                                        required
                                        defaultChecked={
                                          formData && formData.histoire === "no"
                                        }
                                      />
                                    </div>

                                    <div className="col">
                                      <label htmlFor="no4">Non</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          <div className="col-lg-12 mt-5">
                            <fieldset>
                              <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 d-flex justify-content-lg-start">
                                  <label htmlFor="physical_symptoms">
                                    Symptômes physiques
                                  </label>
                                </div>

                                <div className="col-lg-4 d-flex justify-content-lg-start">
                                  <select
                                    name="physical_symptoms"
                                    id="physical_symptoms"
                                    defaultValue={
                                      formData && formData.physical_symptoms
                                    }
                                  >
                                    <option value="none">Rien</option>
                                    <option value="pain">Douleur</option>
                                    <option value="fatigue">Fatigue</option>
                                    <option value="nausea">Nausée</option>
                                    <option value="dizziness">Vertige</option>
                                    <option value="idk">Je ne sais pas</option>
                                  </select>
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          <div className="col-lg-12 mt-4">
                            <fieldset>
                              <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 d-flex justify-content-lg-start">
                                  <label htmlFor="mental_symptoms">
                                    Symptômes de santé mentale
                                  </label>
                                </div>

                                <div className="col-lg-4 d-flex justify-content-lg-start">
                                  <select
                                    name="mental_symptoms"
                                    id="mental_symptoms"
                                    defaultValue={
                                      formData && formData.mental_symptoms
                                    }
                                  >
                                    <option value="none">Rien</option>
                                    <option value="anxiety">Anxiété</option>
                                    <option value="depression">
                                      Dépression
                                    </option>
                                    <option value="mood_swings">
                                      Variations d'humeur
                                    </option>
                                    <option value="idk">Je ne sais pas</option>
                                  </select>
                                </div>
                              </div>
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
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-2">
              <fieldset>
                <button
                  className="stylishButton"
                  onClick={props.handlePrevStep}
                >
                  Précédente
                </button>
              </fieldset>
            </div>

            <div className="col-lg-2">
              <fieldset>
                <button className="stylishButton" onClick={handleNextClick}>
                  Suivante
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
