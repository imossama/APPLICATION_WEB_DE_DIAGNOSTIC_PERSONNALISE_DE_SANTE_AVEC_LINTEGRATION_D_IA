import React, { useEffect, useState } from "react";

import Loading from "../components/Loading/Loading";

import image_1 from "../assets/images/question.png";

export default function Question(props) {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Répondez à la question";
  }, []); // This effect runs only once after the initial render

  const [formData, setFormData] = useState({ question: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.question.trim()) {
      newErrors.question = "Veuillez saisir votre reponse.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      props.handleNextStep(formData);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

      <div className="main-banner">
        <div className="container">
          <form id="question" onSubmit={handleSubmit}>
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
                        <h6>
                          Répondez à cette question pour initialiser le QCM
                        </h6>
                        <h2>Étape 3</h2>
                        <p>
                          Vous devez répondre correctement à la question pour
                          que l'IA génère une question à choix multiples (QCM)
                          pour vous.
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <fieldset>
                          <input
                            type="text"
                            name="question"
                            id="question"
                            className={`form-control ${
                              errors.question && "is-invalid"
                            }`}
                            placeholder="Comment vous sentez-vous aujourd'hui?"
                            value={formData.question}
                            onChange={handleChange}
                          />
                          {errors.question && (
                            <div className="invalid-feedback mt-3 text-center">
                              {errors.question}
                            </div>
                          )}
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-2">
                <fieldset>
                  <button onClick={props.handlePrevStep}>Précédente</button>
                </fieldset>
              </div>

              <div className="col-lg-2">
                <fieldset>
                  <button type="submit">Suivante</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
