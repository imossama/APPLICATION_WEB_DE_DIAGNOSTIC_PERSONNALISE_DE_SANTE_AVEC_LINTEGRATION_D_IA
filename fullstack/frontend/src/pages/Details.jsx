import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import DiagnosisDetails from "../components/DiagnosisDetails/DiagnosisDetails";

// Export APIs
import { fetchDataById } from "../services/apiDiagnosis";

export default function Details() {
  let { id } = useParams();
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // Update the document title
    document.title = `SANTÉIA - Détails du diagnostique ${id}`;
  }, [id]); // Update title whenever id changes

  // Fetch Data
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataById(id);
        if (data) {
          setFilteredData(data);
        } else {
          navigate("/community");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [id, navigate]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />

      {/* Render filtered data here */}
      {loading ? (
        <p>Chargement...</p>
      ) : filteredData ? (
        <DiagnosisDetails key={filteredData.id} details={filteredData} />
      ) : (
        <p>Aucune donnée disponible pour ID {id}</p>
      )}

      <Footer />
    </div>
  );
}
