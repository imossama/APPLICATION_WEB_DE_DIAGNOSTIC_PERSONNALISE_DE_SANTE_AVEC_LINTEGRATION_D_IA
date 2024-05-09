import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../components/Loading/Loading";

// Image importations
import image_1 from "../assets/images/home-img-1.png";
import iamge_2 from "../assets/images/about.png";
import image_service_1 from "../assets/images/service-1.png";
import image_service_2 from "../assets/images/service-2.png";
import image_service_3 from "../assets/images/service-3.png";
import image_service_4 from "../assets/images/service-4.png";
import image_tool_1 from "../assets/images/google-gemini.jpeg";
import image_tool_2 from "../assets/images/health-data.jpg";
import image_contact from "../assets/images/contact.png";
import image_contact_1 from "../assets/images/phone-icon.png";
import image_contact_2 from "../assets/images/email-icon.png";
import image_contact_3 from "../assets/images/location-icon.png";

function Home() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Page Accueil";
  }, []); // This effect runs only once after the initial render

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="left-content show-up header-text">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Application de diagnostique de santé avec l'IA</h6>
                        <h2>Nous veillerons à rester en bonne santé</h2>
                        <p>
                          Vous pouvez facilement vérifier votre santé ou votre
                          santé mentale en nous fournissant des informations
                          personnelles qui seront complètement sécurisées. Cela
                          permettra à notre système de fonctionner efficacement
                          et de vous fournir un diagnostique dédié.{" "}
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-first-button scroll-to-section">
                          <Link to="/diagnostic">Au diagnostique</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-image">
                    <img src={image_1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-left-image">
                    <img src={iamge_2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="about-right-content">
                    <div className="section-heading">
                      <h6>À PROPOS DE NOUS</h6>
                      <h4>
                        WHO IS <em>SANTÉIA</em>
                      </h4>
                      <div className="line-dec"></div>
                    </div>
                    <p>
                      L'équipe de Santéia, dirigée par ETTAQAFI OSSAMA, a
                      développé un Application de diagnostique de santé dirigée
                      AI. Leur objectif est de promouvoir bien-être en
                      permettant aux utilisateurs de surveiller en toute
                      sécurité leur Santé physique et mentale. Ils priorisent la
                      confidentialité des utilisateurs et utiliser une IA
                      avancée pour une analyse de santé personnalisée.{" "}
                    </p>
                    <div className="row">
                      <div className="col-lg-4 col-sm-4">
                        <div className="skill-item first-skill-item">
                          <div className="progress" data-percentage="90">
                            <span className="progress-left">
                              <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                              <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                              <div>
                                90%
                                <br />
                                <span>Innovation</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="skill-item second-skill-item">
                          <div className="progress" data-percentage="80">
                            <span className="progress-left">
                              <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                              <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                              <div>
                                80%
                                <br />
                                <span>Utilisateur</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="skill-item third-skill-item">
                          <div className="progress" data-percentage="80">
                            <span className="progress-left">
                              <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                              <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                              <div>
                                80%
                                <br />
                                <span>Vie privée</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6>NOS SERVICES</h6>
                <h4>
                  CE QUE NOTRE APPLICATION <em>FOURNIT</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <span className="icon">
                              <img src={image_service_1} alt="" />
                            </span>
                            Santé
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img src={image_service_2} alt="" />
                            </span>
                            Santé mentale
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img src={image_service_3} alt="" />
                            </span>
                            Scanner Code QR
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img src={image_service_4} alt="" />
                            </span>
                            Communauté
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Santé</h4>
                                    <p>
                                      Vous pouvez analyser votre santé en
                                      répondant à un questionnaire (QCM) et
                                      afficher des résultats et des
                                      recommandations spécifiques en fonction de
                                      vos réponses.{" "}
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i>{" "}
                                        Questionnaire
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Analyse
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i>{" "}
                                        Recommandations
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Conseils
                                      </span>{" "}
                                    </div>
                                    <p>
                                      The questionnaire (QCM) will be generated
                                      based on the information you provide and
                                      the question you reply to before the QCMs
                                      start.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img src={image_service_1} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Santé mentale</h4>
                                    <p>
                                      Vous pouvez sélectionner l'option de santé
                                      mentale pour diagnostiquer votre état
                                      mental et recevoir résultats appropriés
                                      pour vous aider.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i>{" "}
                                        Questionnaire
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Analyse
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i>{" "}
                                        Recommandations
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Conseils
                                      </span>{" "}
                                    </div>
                                    <p>
                                      The questionnaire (QCM) will be generated
                                      based on the information you provide and
                                      the question you reply to before the QCMs
                                      start.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img src={image_service_2} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Scanner Code QR</h4>
                                    <p>
                                      Notre application offre une fonctionnalité
                                      précieuse: la possibilité de partager un
                                      code QR de votre diagnostique avec votre
                                      famille et vos amis.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i> Partagez
                                        le diagnostique
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i>{" "}
                                        Aggrandir la Communauté
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img src={image_service_3} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Communauté</h4>
                                    <p>
                                      Vous pouvez consulter des résultats
                                      supplémentaires de la communauté pour
                                      mieux comprendre votre santé et votre
                                      bien-être mental, et prendre les mesures
                                      nécessaires en conséquence.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i> Les
                                        données sont privées
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i>{" "}
                                        Consulter les diagnostiques
                                      </span>
                                    </div>
                                    <p>
                                      Toutes les données de l'utilisateur sont
                                      privées et sécurisées. Vous ne pouvez que
                                      voir de manière anonyme le dernier
                                      diagnostique.{" "}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img src={image_service_4} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="get-recom" className="get-recom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading ">
                <h6>OBTENEZ NOS RECOMMANDATIONS ET</h6>
                <h4>NOS MISES à JOUR</h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <input
                        type="web"
                        name="web"
                        className="website"
                        placeholder="Votre nom complet ici ..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Adresse e-mail..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <button type="submit" className="main-button">
                        S'abonner
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="tools" className="our-tools section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>NOS OUTILS IA</h6>
                <h4>
                  NOUS DÉPENDONS DE NOMBREUX MODÈLES <em>D'IA</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="loop owl-carousel">
                {" "}
                {/* loop owl-carousel */}
                <div className="item">
                  <a href="#">
                    <div className="tools-item">
                      <div className="thumb">
                        <img src={image_tool_1} alt="" />
                      </div>
                      <div className="down-content">
                        <h4>Google Gemini</h4>
                        <span>IA pour les développeurs</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="tools-item">
                      <div className="thumb">
                        <img src={image_tool_2} alt="" />
                      </div>
                      <div className="down-content">
                        <h4>Sites de santé</h4>
                        <span>Plus de 10M de données</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>CONTACTEZ-NOUS</h6>
                <h4>
                  ENTREZ EN CONTACT AVEC NOUS <em>MAINTENANT</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <form id="contact" action="#" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-dec">
                      <img src={image_contact} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div id="map">
                      <iframe
                        src="https://maps.google.com/maps?q=Casablanca&t=&z=13&ie=UTF8&iwloc=&output=embed
                        "
                        width="100%"
                        height="636px"
                        style={{ border: 0 }}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="fill-form">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src={image_contact_1} alt="" />
                              <a href="#">059-121-1516</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src={image_contact_2} alt="" />
                              <a href="#">santeia.dev@santeia.ma</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src={image_contact_3} alt="" />
                              <a href="#">Technopark</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              placeholder="Nom"
                              autoComplete="on"
                              required
                            />
                          </fieldset>
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
                              type="subject"
                              name="subject"
                              id="subject"
                              placeholder="Sujet"
                              autoComplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <textarea
                              name="message"
                              type="text"
                              className="form-control"
                              id="message"
                              placeholder="Message"
                              required
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="main-button"
                            >
                              Envoyer
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
  );
}

export default Home;
