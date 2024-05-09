import React, { useEffect, useState } from "react";

import Loading from "../components/Loading/Loading";
import QcmQuestion from "../components/QcmQuestion/QcmQuestion";
import image_1 from "../assets/images/qcm.png";

export default function Qcm(props) {
  useEffect(() => {
    document.title = "SANTÉIA - Questionnaire à choix multiples";
  }, []);

  const numericKeys = Object.keys(props.formData).filter((key) => !isNaN(key));
  const data = numericKeys.reduce((acc, key) => {
    acc[key] = props.formData[key];
    return acc;
  }, {});

  // Initialize state with data
  const [qcmData, setQcmData] = useState(data);
  const [showError, setShowError] = useState(false); // State to track whether to show error

  const handleResponseChange = (id, response) => {
    setQcmData((prevQcmData) => ({
      ...prevQcmData,
      [id]: { ...prevQcmData[id], answer: response },
    }));
  };

  const handleNextClick = () => {
    // Check if any option is not selected
    const anyOptionNotSelected = Object.values(qcmData).some(
      (data) => !data.answer
    );

    if (anyOptionNotSelected) {
      // If any option is not selected, show error
      setShowError(true);
    } else {
      // If all options are selected, proceed to the next step
      setShowError(false);
      props.handleNextStep({ qcm: qcmData });
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

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
                        <h6>Répondez à ces questions</h6>
                        <h2>Dernière étape</h2>
                        <p>
                          Vous devez répondre à chaque question en sélectionnant
                          votre degré d'accord, de désaccord ou de neutralité.
                        </p>

                        <div className="col-lg-12">
                          {Object.entries(qcmData).map(([key, data]) => (
                            <QcmQuestion
                              key={key}
                              id_qst={key}
                              question={data.question}
                              options={data.options}
                              onResponseChange={handleResponseChange}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {showError && (
                      <div className="row mt-3">
                        <div className="col-lg-12">
                          <p className="text-danger">
                            Veuillez répondre à toutes les questions avant de
                            continuer.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="row mt-5 justify-content-center">
                      <div className="col-lg-2">
                        <fieldset>
                          <button
                            className="stylishButton"
                            onClick={props.handlePrevStep}
                          >
                            Précédente
                          </button>
                        </fieldset>
                      </div>

                      <div className="col-lg-2">
                        <fieldset>
                          <button
                            className="stylishButton"
                            onClick={handleNextClick}
                          >
                            Résultat
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
    </div>
  );
}
