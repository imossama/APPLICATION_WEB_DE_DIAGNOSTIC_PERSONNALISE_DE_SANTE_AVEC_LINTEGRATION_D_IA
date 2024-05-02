import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

// Import fetchDataByUserId function
import { fetchDataByUserId, deleteDataById } from "../services/apiDiagnosis";
import { getUserIdFromLocalStorage } from "../services/logged_userId";

export default function History() {
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "SANTÉIA - Page d'historique";

    // Fetch diagnosis data by userId
    fetchDataByUserId(getUserIdFromLocalStorage())
      .then((data) => {
        setDiagnoses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching diagnosis data:", error);
        setLoading(false);
      });
  }, []); // This effect runs only once after the initial render

  // Function to handle delete button click
  const handleDelete = async (id) => {
    try {
      await deleteDataById(id);
      // Update diagnoses state after deletion
      setDiagnoses(diagnoses.filter((diagnosis) => diagnosis.id !== id));
      console.log("Diagnosis deleted successfully");
    } catch (error) {
      console.error("Error deleting diagnosis:", error);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading visible={loading} />
      <UpperContact />
      <Navbar />

      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 mb-5 align-self-center">
                  <div className="left-content show-up header-text">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Historique des</h6>
                        <h2>Diagnostiques</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center show-up">
                  {loading ? (
                    <p>Chargement...</p>
                  ) : diagnoses.length === 0 ? (
                    <p>Aucun diagnostique trouvé</p>
                  ) : (
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Titre</th>
                          <th scope="col">Date</th>
                          <th scope="col">Visite</th>
                          <th scope="col">Supprimer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {diagnoses.map((diagnosis, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{diagnosis.title}</td>
                            <td>{diagnosis.date}</td>
                            <td>
                              <Link to={`/diagnosis/${diagnosis.id}`}>
                                Visite
                              </Link>
                            </td>
                            <td>
                              <button
                                onClick={() => handleDelete(diagnosis.id)}
                                className="btn btn-danger"
                              >
                                Supprimer
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
