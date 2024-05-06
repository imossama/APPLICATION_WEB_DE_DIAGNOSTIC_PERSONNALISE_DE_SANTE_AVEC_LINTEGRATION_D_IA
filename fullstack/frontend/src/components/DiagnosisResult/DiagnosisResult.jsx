import React from "react";

import image_1 from "../../assets/images/result.png";
import { Link } from "react-router-dom";

export default function DiagnosisResult({ diagnosticData }) {
  var diagnostic = diagnosticData.diagnostic;

  console.log("diagnostic", diagnostic);

  return (
    <div className="main-banner">
      <div className="container">
        <form id="question" action="" method="post">
          <div className="row">
            <div className="col-lg-3">
              <div className="right-image">
                <img src={image_1} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>{diagnostic.date}</h6>
                      <h2>{diagnostic.titre}</h2>
                      <p>
                        Vous pouvez partager le diagnostique avec votre famille
                        ou amis, <a href="#">Enregistrez-le en PDF</a> sur votre
                        ordinateur, ou
                        <Link to="/step">Refaire le diagnostique.</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mt-5">
              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Description</h4>
                      <p>
                        {diagnostic.description
                          ? diagnostic.description
                          : "Pas de données"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Symptômes</h4>
                      {diagnostic.symptomes ? (
                        Array.isArray(diagnostic.symptomes) ? (
                          <ul className="list-group mb-4 mt-3">
                            {diagnostic.symptomes.map((symptom, index) => (
                              <li key={index} className="list-group-item">
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{diagnostic.symptomes}</p>
                        )
                      ) : (
                        <p>Pas de données</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Conseils</h4>
                      <p>
                        {diagnostic.conseils
                          ? diagnostic.conseils
                          : "Pas de données"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-5">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Médicaments</h4>
                      <div className="row mt-2">
                        {diagnostic.medicaments?.length === 0 ? (
                          <p>Pas de données</p>
                        ) : (
                          /* Render the medicaments data */
                          (diagnostic.medicaments || []).map((medic, index) => (
                            <div className="col-lg-3" key={index}>
                              <div className="medic">
                                <div className="icon mt-4">
                                  <img src={medic.url_image} alt={medic.nom} />
                                  <div className="text-container">
                                    <a href={medic.lien}>{medic.nom}</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-5 mb-4">
              <div className="left-content show-up header-text">
                <div className="row">
                  <div className="col-lg-6">
                    <h4>QR Code</h4>
                    <img src={diagnostic.qr_code} alt="" id="qr_code" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
