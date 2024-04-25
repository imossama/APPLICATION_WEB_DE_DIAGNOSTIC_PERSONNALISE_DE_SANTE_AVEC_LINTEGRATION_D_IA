import React, { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";

import Loading from "../components/Loading/Loading";

import image_med_data from "../assets/images/medical-data.png";

export default function Medical() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Informations sur la santé";
  }, []); // This effect runs only once after the initial render

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
                      <h6>Remplissez le formulaire avec votre</h6>
                      <h2>Informations sur votre santé</h2>
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
                                  <label for="medical_conditions">
                                    Conditions médicales préexistantes
                                  </label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="yes"
                                        name="medical_conditions"
                                        value="yes"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="yes">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="no"
                                        name="medical_conditions"
                                        value="no"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="no">Non</label>
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
                                  <label for="allergies">Allergies</label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="yes"
                                        name="allergies"
                                        value="yes"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="yes">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="no"
                                        name="allergies"
                                        value="no"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="no">Non</label>
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
                                  <label for="chirurgies">
                                    Chirurgies ou hospitalisations antérieures
                                  </label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="yes"
                                        name="chirurgies"
                                        value="yes"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="yes">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="no"
                                        name="chirurgies"
                                        value="no"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="no">Non</label>
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
                                  <label for="histoire">
                                    Histoire des maladies
                                  </label>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="yes"
                                        name="histoire"
                                        value="yes"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="yes">Oui</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-2">
                                  <div className="row">
                                    <div className="col">
                                      <input
                                        type="radio"
                                        id="no"
                                        name="histoire"
                                        value="no"
                                      />
                                    </div>

                                    <div className="col">
                                      <label for="no">Non</label>
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
                                  <label for="physical-symptoms">
                                    Symptômes physiques
                                  </label>
                                </div>

                                <div className="col-lg-4 d-flex justify-content-lg-start">
                                  <select
                                    name="physical-symptoms"
                                    id="physical-symptoms"
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
                                  <label for="mental-symptoms">
                                    Symptômes de santé mentale
                                  </label>
                                </div>

                                <div className="col-lg-4 d-flex justify-content-lg-start">
                                  <select
                                    name="mental-symptoms"
                                    id="mental-symptoms"
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
                          </div>

                          <div className="col-lg-4">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="main-button "
                              >
                                Sauvegarder
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
      <Footer />
    </div>
  );
}
