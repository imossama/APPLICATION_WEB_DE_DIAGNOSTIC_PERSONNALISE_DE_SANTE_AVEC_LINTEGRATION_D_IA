import React, { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";

import Loading from "../components/Loading/Loading";

import DiagnosisResult from "../components/DiagnosisResult/DiagnosisResult";

export default function Result({ diagnosticData }) {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Résultat QCM";
  }, []); // This effect runs only once after the initial render

  console.log("The Data : \n", diagnosticData);

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />

      <DiagnosisResult diagnosticData={diagnosticData} />

      <Footer />
    </div>
  );
}
