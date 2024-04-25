import React, { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";

import Loading from "../components/Loading/Loading";

import image_pers_data from "../assets/images/pers-data.png";

export default function Informations() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Informations";
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
                      <h2>Informations Personnelles</h2>
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
                                name="fname"
                                id="fname"
                                placeholder="Nom"
                                required
                              />
                            </fieldset>
                            <fieldset>
                              <input
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Prénom"
                                required
                              />
                            </fieldset>
                            <fieldset>
                              <input
                                type="text"
                                name="date"
                                id="date"
                                placeholder="Date de naissance"
                                required
                              />
                            </fieldset>
                            <fieldset>
                              <select name="gender" id="gender" required>
                                <option value="" disabled selected>
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
                                name="prof"
                                id="prof"
                                placeholder="Votre profession"
                                required
                              />
                            </fieldset>
                            <fieldset>
                              <textarea
                                name="prop"
                                type="text"
                                className="form-control"
                                id="prop"
                                placeholder="Au propos de vous"
                                maxLength="300"
                                required
                              ></textarea>
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
