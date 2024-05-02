import React from "react";

import image_1 from "../../assets/images/result.png";

export default function DiagnosisResult(props) {
  var result = props.result;

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
                      <h6>dd/mm/yyyy</h6>
                      <h2>{result.title}</h2>
                      <p>
                        Vous pouvez partager le diagnostique avec votre famille ou
                        amis, enregistrez-le en PDF sur votre ordinateur, ou
                        refaire le diagnostique.{" "}
                      </p>
                    </div>

                    <div className="row d-flex">
                      <div className="col-lg-4">
                        <fieldset>
                          <button id="go-back" className="main-button">
                            Enregistrer
                          </button>
                        </fieldset>
                      </div>
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
                      <p>{result.desc} </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Symptômes</h4>
                      <p>{result.symp} </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Conseils</h4>
                      <p>{result.cons} </p>
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
                        {result.medic.map((medication, index) => (
                          <div className="col-lg-3">
                            <div className="medic" key={index}>
                              <div className="icon mt-4">
                                <img
                                  src={medication.image}
                                  alt={medication.name}
                                />
                                <div className="text-container">
                                  <a href={medication.link}>{medication.name}</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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
                    <img src={result.qr_code} alt="" id="qr_code" />
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
