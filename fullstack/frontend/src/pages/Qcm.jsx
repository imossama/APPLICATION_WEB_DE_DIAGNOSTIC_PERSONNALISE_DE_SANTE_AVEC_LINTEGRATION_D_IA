import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import QcmQuestion from "../components/QcmQuestion/QcmQuestion";
import image_1 from "../assets/images/qcm.png";

export default function Qcm(props) {
  const [qcmData, setQcmData] = useState([
    { id: "qst-1", question: "Question 1 ?", response: "" },
    { id: "qst-2", question: "Question 2 ?", response: "" },
    // Add more questions as needed
  ]);
  const [errors, setErrors] = useState(Array(qcmData.length).fill(false));

  useEffect(() => {
    document.title = "SANTÉIA - Questionnaire à choix multiples";
  }, []);

  const handleNextClick = () => {
    const allAnswered = qcmData.every((item) => item.response !== "");
    if (!allAnswered) {
      // Set errors for unanswered questions
      const newErrors = qcmData.map((item) =>
        item.response === "" ? "Answer required" : ""
      );
      setErrors(newErrors);
      return; // Don't proceed if not all questions are answered
    }

    // Pass the array of question-response pairs to the next step
    props.handleNextStep({ Qcm: qcmData });
  };

  const handleResponseChange = (id, response) => {
    const updatedQcmData = qcmData.map((item) =>
      item.id == id ? { ...item, response: response } : item
    );

    console.log(updatedQcmData);

    setQcmData(updatedQcmData);

    const updatedErrors = [...errors];
    updatedErrors[qcmData.findIndex((item) => item.id == id)] = false;

    setErrors(updatedErrors);
  };

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
                        <h6>Répondez à ces questions</h6>
                        <h2>Dernière étape</h2>
                        <p>
                          Vous devez répondre à chaque question en sélectionnant
                          votre degré d'accord, de désaccord ou de neutralité.{" "}
                        </p>

                        <div className="col-lg-12">
                          {qcmData.map((item, index) => (
                            <QcmQuestion
                              key={item.id}
                              question={item.question}
                              id_qst={item.id}
                              response={item.response}
                              onResponseChange={handleResponseChange}
                              error={errors[index]}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

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
      <Footer />
    </div>
  );
}
