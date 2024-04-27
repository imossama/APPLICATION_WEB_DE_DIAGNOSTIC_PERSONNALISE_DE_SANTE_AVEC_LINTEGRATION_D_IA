import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

import image_1 from "../assets/images/question.png";

export default function Question() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Répondez à la question";
  }, []); // This effect runs only once after the initial render

  const [formData, setFormData] = useState({ question: "", type: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const { question, type } = formData;
    const errors = {};
    if (!question) {
      errors.question = "Please enter your question";
    }
    if (!type) {
      errors.type = "Please select a type";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Don't submit if there are errors
    }
    // Form submission logic here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />
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
                        <h2>Étape 1</h2>
                        <p>
                          Vous devez répondre correctement à la question pour
                          l'IA génère une question à choix multiple (QCM) pour
                          vous.
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
                            required
                          />
                          {errors.question && (
                            <div className="invalid-feedback">
                              {errors.question}
                            </div>
                          )}
                        </fieldset>
                      </div>
                    </div>

                    <div className="row mt-3 d-flex justify-content-center">
                      <div className="col-lg-4">
                        <div className="row">
                          <div className="col">
                            <input
                              type="radio"
                              id="health"
                              name="type"
                              value="health"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col">
                            <label htmlFor="health">Santé</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="row">
                          <div className="col">
                            <input
                              type="radio"
                              id="mental-health"
                              name="type"
                              value="mental-health"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col">
                            <label htmlFor="mental-health">Santé mentale</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="row">
                          <div className="col">
                            <input
                              type="radio"
                              id="idk"
                              name="type"
                              value="idk"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col">
                            <label htmlFor="idk">Je ne sais pas</label>
                          </div>
                        </div>
                      </div>
                      {errors.type && (
                        <div className="invalid-feedback">{errors.type}</div>
                      )}
                    </div>

                    <div className="row mt-5 d-flex justify-content-center">
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
