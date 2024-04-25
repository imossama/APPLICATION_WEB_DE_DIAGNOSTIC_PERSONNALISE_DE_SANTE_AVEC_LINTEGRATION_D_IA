import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";

import Loading from "../components/Loading/Loading";

import image_register from "../assets/images/register.png";

export default function Register() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Page d'inscription'";
  }, []); // This effect runs only once after the initial render

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading/>
      <UpperContact />
      <Navbar />
      <div className="main-banner wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-5 align-self-center">
                  {" "}
                  {/* Modify here - align-self-center*/}
                  <div className="left-content show-up header-text wow fadeInLeft">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Welcome to our application</h6>
                        <h2>S'inscrire</h2>
                        <p>
                          Si vous avez un compte, vous pouvez se connecter.
                          Cliquez simplement sur le bouton ci-dessous.{" "}
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-first-button scroll-to-section">
                          <a href="">Se connecter</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="right-image wow fadeInRight">
                    <form id="contact" action="" method="post">
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
                                    pattern="[^ @]*@[^ @]*"
                                    placeholder="Votre e-mail"
                                    required=""
                                  />
                                </fieldset>
                                <fieldset>
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Votre mot de passe"
                                    required=""
                                  />
                                </fieldset>
                                <fieldset>
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Récrire le mot de passe"
                                    required=""
                                  />
                                </fieldset>
                              </div>

                              <div className="col-lg-4">
                                <fieldset>
                                  <button
                                    type="submit"
                                    id="form-submit"
                                    className="main-button "
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
      <Footer />
    </div>
  );
}
