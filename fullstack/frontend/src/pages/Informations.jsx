import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import { getUserIdFromLocalStorage } from "../services/logged_userId";

import image_pers_data from "../assets/images/pers-data.png";

export default function Informations(props) {
  const [formData, setFormData] = useState({
    userId: getUserIdFromLocalStorage(), // You need to replace this with the actual user ID
    fname: "",
    lname: "",
    date: "",
    gender: "",
    prof: "",
    prop: "",
    ...props.formData,
  });

  const [formError, setFormError] = useState("");

  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Informations";
  }, []);

  // Validation function to check if all fields are filled
  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextClick = () => {
    if (validateForm()) {
      props.handleNextStep(formData);
    } else {
      setFormError("Veuillez remplir tous les champs du formulaire.");
      setTimeout(() => {
        setFormError("");
      }, 3000);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />
      <div className="main-banner">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="col-lg-5 align-self-center">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>Informations Personnelles</h6>
                      <h2>Étape 1</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-image mt-5">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="fill-form">
                        <div className="row d-flex justify-content-center align-items-center">
                          <div className="col-lg-5">
                            <img src={image_pers_data} alt="" />
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <input
                                type="text"
                                name="fname"
                                id="fname"
                                placeholder="Nom"
                                value={formData.fname} // Binding value to formData.fname
                                onChange={handleChange}
                                // required
                              />
                            </fieldset>
                            <fieldset>
                              <input
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Prénom"
                                value={formData.lname} // Binding value to formData.lname
                                onChange={handleChange}
                                // required
                              />
                            </fieldset>
                            <fieldset>
                              <input
                                type="date"
                                name="date"
                                id="date"
                                placeholder="Date de naissance"
                                value={formData.date} // Binding value to formData.date
                                onChange={handleChange}
                                // required
                              />
                            </fieldset>
                            <fieldset>
                              <select
                                name="gender"
                                id="gender"
                                onChange={handleChange}
                                // required
                                value={formData.gender} // Binding value to formData.gender
                              >
                                <option value="" disabled>
                                  Choisissez votre genre
                                </option>
                                <option value="male">Homme</option>
                                <option value="female">Femelle</option>
                                <option value="other">Autre</option>
                              </select>
                            </fieldset>
                            <fieldset>
                              <input
                                type="text"
                                name="prof"
                                id="prof"
                                onChange={handleChange}
                                placeholder="Votre profession"
                                value={formData.prof} // Binding value to formData.prof
                                // required
                              />
                            </fieldset>
                            <fieldset>
                              <textarea
                                name="prop"
                                type="text"
                                className="form-control"
                                id="prop"
                                onChange={handleChange}
                                placeholder="Au propos de vous"
                                maxLength="300"
                                value={formData.prop} // Binding value to formData.prop
                                // required
                              ></textarea>
                            </fieldset>

                            {formError && (
                              <p className="text-danger mt-3">{formError}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="row justify-content-center">
                  <div className="col-lg-3">
                    <fieldset>
                      <button
                        className="stylishButton"
                        onClick={handleNextClick}
                      >
                        Suivante
                      </button>
                    </fieldset>
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
