import React, { useEffect } from "react";

import Loading from "../components/Loading/Loading";

import DiagnosisDetails from "../components/DiagnosisDetails/DiagnosisDetails";

export default function Result({ diagnosticData }) {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Résultat QCM";
  }, []); // This effect runs only once after the initial render

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

      <DiagnosisDetails type={0} diagnosticData={diagnosticData} />
    </div>
  );
}
