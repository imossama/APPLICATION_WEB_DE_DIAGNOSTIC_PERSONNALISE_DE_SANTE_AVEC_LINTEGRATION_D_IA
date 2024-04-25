import React, { useEffect } from "react";
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
              <form id="contact" action="" method="post">
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
                              pattern="[^ @]*@[^ @]*"
                              placeholder="Votre e-mail"
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <input
                              type="password"
                              name="old-pw"
                              id="old-pw"
                              placeholder="Ancien mot de passe"
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <input
                              type="password"
                              name="new-pw-1"
                              id="new-pw-1"
                              placeholder="Nouveau mot de passe"
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <input
                              type="password"
                              name="new-pw-2"
                              id="new-pw-2"
                              placeholder="Répétez le nouveau mot de passe"
                              required
                            />
                          </fieldset>

                          <fieldset>
                            <div className="pr-checkbox mt-4 row">
                              <div className="col-lg-8">
                                <label for="checkbox_id">
                                  Recevoir le résultat du diagnostic dans votre
                                  e-mail
                                </label>
                              </div>

                              <div className="col">
                                <div className="left-content">
                                  <input
                                    type="checkbox"
                                    id="checkbox_id"
                                    name="checkbox_name"
                                    value="checkbox_value"
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
                        className="main-button "
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
