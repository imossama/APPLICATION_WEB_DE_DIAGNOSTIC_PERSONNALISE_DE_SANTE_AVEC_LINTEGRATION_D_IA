import React, { useState, useEffect } from "react";
import Informations from "./Informations";
import Medical from "./Medical";
import Question from "./Question";
import Qcm from "./Qcm";
import Result from "./Result";

// Services
import { sendDatatoServer } from "../services/apiDataAI";
import DataLoading from "../components/Loading/DataLoading";

const SequentialFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [diagnosticData, setDiagnosticData] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleSendDataToServer = async (data, step) => {
    try {
      setLoading(true);

      const {
        allergies,
        chirurgies,
        date,
        fname,
        gender,
        histoire,
        lname,
        medical_conditions,
        mental_symptoms,
        physical_symptoms,
        prof,
        prop,
        question,
        userId,
        qcm,
      } = data;

      // Create a new object with the required fields
      const postData = {
        allergies,
        chirurgies,
        date,
        fname,
        gender,
        histoire,
        lname,
        medical_conditions,
        mental_symptoms,
        physical_symptoms,
        prof,
        prop,
        question,
        userId,
        qcm,
      };

      // console.log("data 2 server: \n", postData);

      const jsonData = JSON.stringify(postData);
      const response = await sendDatatoServer(jsonData, step);
      setResponseData(response);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("Updated formData:", formData);

    // Check if you need to send data to the server
    if (step === 4 || step === 6) {
      handleSendDataToServer(formData, step);
    }
  }, [formData, step]);

  const handleNextStep = (data) => {
    // Create a new object merging the previous formData with the new data
    const updatedFormData = { ...formData, ...data };

    // Update the formData state
    setFormData(updatedFormData);

    // Increment step after the state has been updated
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSecPrevStep = () => {
    setStep(step - 2);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Informations formData={formData} handleNextStep={handleNextStep} />
        );
      case 2:
        return (
          <Medical
            formData={formData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
      case 3:
        return (
          <Question
            formData={formData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
      case 4:
        return (
          <>
            {loading ? <DataLoading isLoading={loading} /> : ""}
            {!responseData && <h1>Erreur dans le processus!</h1>}
            {responseData && responseData.qcm && (
              <>
                {(() => {
                  const string = responseData.qcm;

                  const cleanedString = string
                    .replace("```json", "")
                    .replace("```", "");

                  // console.log(cleanedString);

                  try {
                    const jsonData = JSON.parse(cleanedString);

                    // console.log("JSON:\n", jsonData);

                    const newformData = {};
                    for (const key in jsonData) {
                      if (Object.hasOwnProperty.call(jsonData, key)) {
                        formData[key] = {
                          question: jsonData[key].question,
                          options: jsonData[key].reponses, // Fixed typo here
                        };
                      }
                    }

                    setFormData({
                      ...formData,
                      ...newformData,
                    });

                    handleNextStep();
                  } catch (error) {
                    return <Error error={error.message} />;
                  }
                })()}
              </>
            )}
          </>
        );

      case 5:
        return (
          <Qcm
            formData={formData}
            handleNextStep={handleNextStep}
            handlePrevStep={handleSecPrevStep}
          />
        );
      case 6:
        return (
          <>
            {loading ? <DataLoading isLoading={loading} /> : ""}
            {!responseData && <h1>Erreur dans le processus!</h1>}
            {responseData && responseData.diagnostic && (
              <>
                {(() => {
                  const data = responseData.diagnostic;

                  try {
                    setDiagnosticData({
                      diagnostic: {
                        ...data,
                      },
                    });

                    handleNextStep({});
                  } catch (error) {
                    return <Error error={error.message} />;
                  }
                })()}
              </>
            )}
          </>
        );
      case 7:
        return (
          <Result
            diagnosticData={diagnosticData}
            handlePrevStep={handleSecPrevStep}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default SequentialFlow;
