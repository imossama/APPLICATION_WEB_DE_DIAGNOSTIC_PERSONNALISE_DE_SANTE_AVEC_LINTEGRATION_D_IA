import React from "react";

export default function QcmQuestion({ question, id_qst, onResponseChange, error }) {
  const handleResponseChange = (event) => {
    const rsp = event.target.value;
    onResponseChange(id_qst, rsp);
  };

  return (
    <div className="qst row mb-4">
      <div className="d-flex justify-content-start">
        <fieldset>
          <div className="row">
            <span>{question}</span>
          </div>
          <div className="row">
            <div className="col">Accord</div>
            <div className="col">
              <input
                type="radio"
                name={id_qst}
                id="high-2"
                value="high-2"
                onChange={handleResponseChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="radio"
                name={id_qst}
                id="high-1"
                value="high-1"
                onChange={handleResponseChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="radio"
                name={id_qst}
                id="nutral"
                value="nutral"
                onChange={handleResponseChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="radio"
                name={id_qst}
                id="low-1"
                value="low-1"
                onChange={handleResponseChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="radio"
                name={id_qst}
                id="low-2"
                value="low-2"
                onChange={handleResponseChange}
                required
              />
            </div>
            <div className="col">Désaccord</div>
          </div>
          {error && (
            <div className="text-danger" style={{textAlign: 'center'}}>
              Veuillez répondre à cette question.
            </div>
          )}
        </fieldset>
      </div>
    </div>
  );
}
