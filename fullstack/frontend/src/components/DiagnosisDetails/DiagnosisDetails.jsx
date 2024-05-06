import React from "react";

export default function DiagnosisDetails({ details }) {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="col-lg-12">
              <div className="left-content show-up header-text">
                <div className="row">
                  <div className="col-lg-12">
                    <h6>{details.date}</h6>
                    <h2>{details.title}</h2>
                    <p>
                      Ce diagnostique est unique à l'utilisateur, avec
                      l'identifiant: {details.userId}{" "}
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
                      {details.description
                        ? details.description
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
                    {details.symptomes ? (
                      Array.isArray(details.symptomes) ? (
                        <ul className="list-group mb-4 mt-3">
                          {details.symptomes.map((symptom, index) => (
                            <li key={index} className="list-group-item">
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{details.symptomes}</p>
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
                      {details.conseils
                        ? details.conseils
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
                      {details.medicaments?.length === 0 ? (
                        <p>Pas de données</p>
                      ) : (
                        /* Render the medicaments data */
                        (details.medicaments || []).map((medic, index) => (
                          <div className="col-lg-3" key={index}>
                            <a href={medic[index].lien}>
                              <div className="medic">
                                <div className="icon mt-4">
                                  <div className="text-container">
                                    {medic.nom[index]}
                                  </div>
                                </div>
                              </div>
                            </a>
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
                  <img src={"http://localhost:5000/" + details.qr_code} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
