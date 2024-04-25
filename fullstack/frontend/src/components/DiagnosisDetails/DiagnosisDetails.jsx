import React from "react";

export default function Diagnosisdetails(props) {
  var details = props.details;

  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="col-lg-12">
              <div className="left-content show-up header-text">
                <div className="row">
                  <div className="col-lg-12">
                    <h6>dd/mm/yyyy</h6>
                    <h2>{details.title}</h2>
                    <p>
                      Ce diagnostic est unique à l'utilisateur, avec
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
                    <p>{details.desc} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="left-content show-up header-text">
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Symptômes</h4>
                    <p>{details.symp} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="left-content show-up header-text">
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Conseils</h4>
                    <p>{details.cons} </p>
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
                      {details.medic.map((medication, index) => (
                        <div className="col-lg-3">
                          <div className="medic" key={index}>
                            <div className="icon mt-4">
                              <img
                                src={medication.image}
                                alt={medication.name}
                              />
                              <div class="text-container">
                                <a href="#">{medication.name}</a>
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
                  <img src={details.qr_code} alt="" id="qr_code" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
