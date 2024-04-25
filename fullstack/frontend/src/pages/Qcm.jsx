import React, { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";

import Loading from "../components/Loading/Loading";
import QcmQuestion from "../components/QcmQuestion/QcmQuestion";

import image_1 from "../assets/images/qcm.png";

export default function Qcm() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Questionnaire à choix multiples";
  }, []); // This effect runs only once after the initial render

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />
      <div className="main-banner">
        <div className="container">
          <form id="question" action="" method="post">
            <div className="row">
              <div className="col">
                <div className="col-lg-12">
                  <div className="left-content show-up header-text">
                    <div className="row">
                    <div className="col-lg-4">
                          <div className="right-image">
                            <img src={image_1} alt="" />
                          </div>
                        </div>
                      <div className="col-lg-8">
                        <h6>
                          Répondez à cette question pour initialiser le QCM
                        </h6>
                        <h2>Étape 2</h2>
                        <p>
                          Vous devez répondre à chaque question en sélectionnant
                          votre degré d'accord, de désaccord ou de neutralité.{" "}
                        </p>

                        <div className="col-lg-12">
                          <QcmQuestion question="Question 1 ?" id_qst="qst-1" />
                          <QcmQuestion question="Question 2 ?" id_qst="qst-2" />
                          <QcmQuestion question="Question 3 ?" id_qst="qst-3" />
                          <QcmQuestion question="Question 4 ?" id_qst="qst-4" />
                          <QcmQuestion question="Question 5 ?" id_qst="qst-5" />
                          <QcmQuestion question="Question 6 ?" id_qst="qst-6" />
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5 d-flex justify-content-center">
                      <div className="col-lg-4">
                        <fieldset>
                          <button id="go-back" className="main-button">
                            Retourner
                          </button>
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button"
                          >
                            Continuer
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
