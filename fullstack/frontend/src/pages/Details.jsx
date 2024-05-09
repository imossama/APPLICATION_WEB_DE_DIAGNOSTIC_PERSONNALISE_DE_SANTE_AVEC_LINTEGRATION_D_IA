import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loading from "../components/Loading/Loading";
import DiagnosisDetails from "../components/DiagnosisDetails/DiagnosisDetails";

// Export APIs
import { fetchDataById } from "../services/apiDiagnosis";

export default function Details() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `SANTÉIA - Détails de diagnostic | ID  : ${id}`;

    const fetchData = async () => {
      try {
        const data = await fetchDataById(id);
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        // Handle specific error cases, such as 404 Not Found
        if (error.message === "Diagnosis not found") {
          // Navigate back to the previous page
          navigate(-1);
        } else {
          console.error("Error:", error);
        }
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup logic here
    };
  }, [id, navigate]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

      {/* Render filtered data here */}
      {loading ? (
        <p>Chargement...</p>
      ) : filteredData ? (
        <DiagnosisDetails
          key={filteredData.id}
          type={1}
          diagnosticData={filteredData}
          setPdfUrl={setPdfUrl}
        />
      ) : (
        <p>Aucune donnée disponible pour ID {id}</p>
      )}
    </div>
  );
}
