import React, { useState } from "react";
import Informations from "./Informations";
import Medical from "./Medical";
import Question from "./Question";
import Qcm from "./Qcm";
import Result from "./Result";

const SequentialFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handlePrevStepII = () => {
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
            setFormData={setFormData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
      case 3:
        return (
          <Question
            formData={formData}
            setFormData={setFormData} // Pass setFormData as a prop
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
      case 4:
        return (
          <div>
            <h1>Keep loading...</h1>
            <p>{JSON.stringify(formData)}</p>
            <button onClick={handleNextStep}>Skip (test)</button>
          </div>
        );
      case 5:
        return (
          <Qcm
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStepII}
          />
        );
      case 6:
        return (
          <div>
            <h1>Keep loading...</h1>
            <p>{console.log(formData)}</p>
          </div>
        );
      case 7:
        return <Result formData={formData} handlePrevStep={handlePrevStepII} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default SequentialFlow;
