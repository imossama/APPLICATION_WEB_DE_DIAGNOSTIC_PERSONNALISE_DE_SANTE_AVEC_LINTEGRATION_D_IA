import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";

import Loading from "../components/Loading/Loading";

import image_login from "../assets/images/login.png";

export default function Login() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Page de connexion";
  }, []); // This effect runs only once after the initial render

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-5 align-self-center">
                  <div className="left-content show-up header-text">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Welcome back to our application</h6>
                        <h2>Se connecter</h2>
                        <p>
                          Si vous n'avez pas de compte, vous pouvez en créer un
                          facilement. Cliquez simplement sur le bouton
                          ci-dessous.{" "}
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-first-button scroll-to-section">
                          <a href="">S'inscrire</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="right-image">
                    <form id="contact" action="" method="post">
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
                                    pattern="[^ @]*@[^ @]*"
                                    placeholder="Votre e-mail"
                                    required
                                  />
                                </fieldset>
                                <fieldset>
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Votre mot de passe"
                                    required
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
      <Footer />
    </div>
  );
}
