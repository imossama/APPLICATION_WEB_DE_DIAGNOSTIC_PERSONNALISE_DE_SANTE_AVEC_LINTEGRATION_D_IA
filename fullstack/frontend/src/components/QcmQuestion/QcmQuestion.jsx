import React from "react";

export default function QcmQuestion({
  id_qst,
  question,
  options,
  onResponseChange,
}) {
  const handleResponseChange = (event) => {
    const response = event.target.value;
    onResponseChange(id_qst, response);
  };

  return (
    <div className="qst row mb-4">
      <fieldset>
        <div className="row">
          <span>
            {id_qst}. {question}
          </span>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center small text-center">
            {options[0]}
          </div>
          <div className="col">
            <input
              type="radio"
              name={id_qst}
              id="high-2"
              value={options[0]}
              onChange={handleResponseChange}
              title={options[0]}
              required
            />
          </div>
          <div className="col">
            <input
              type="radio"
              name={id_qst}
              id="high-1"
              value={options[1]}
              onChange={handleResponseChange}
              title={options[1]}
              required
            />
          </div>
          <div className="col">
            <input
              type="radio"
              name={id_qst}
              id="nutral"
              value={options[2]}
              title={options[2]}
              onChange={handleResponseChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="radio"
              name={id_qst}
              id="low-1"
              value={options[3]}
              title={options[3]}
              onChange={handleResponseChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="radio"
              name={id_qst}
              id="low-2"
              value={options[4]}
              title={options[4]}
              onChange={handleResponseChange}
              required
            />
          </div>

          <div className="col d-flex align-items-center justify-content-center small text-center">
            {options[4]}
          </div>
        </div>
      </fieldset>
    </div>
  );
}
