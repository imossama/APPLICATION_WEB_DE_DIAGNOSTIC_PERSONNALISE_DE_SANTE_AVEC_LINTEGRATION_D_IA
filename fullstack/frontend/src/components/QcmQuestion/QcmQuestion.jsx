import React from "react";

export default function QcmQuestion({ question, id_qst }) {
  return (
    <div className="qst row">
      <div className="d-flex justify-content-center">
        <fieldset>
          <div className="row">
            <label>{question}</label>
          </div>
          <div className="row">
            <div className="col">Oui</div>
            <div className="col">
              <input type="radio" name={id_qst} id="high-2" required/>
            </div>
            <div className="col">
              <input type="radio" name={id_qst} id="high-1" required />
            </div>
            <div className="col">
              <input type="radio" name={id_qst} id="nutral" required />
            </div>
            <div className="col">
              <input type="radio" name={id_qst} id="low-1" required />
            </div>
            <div className="col">
              <input type="radio" name={id_qst} id="low-2" required />
            </div>
            <div className="col">Non</div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
