import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { fetchDataByUserId, deleteDataById } from "../services/apiDiagnosis";
import { getUserIdFromLocalStorage } from "../services/logged_userId";

export default function History() {
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "SANTÉIA - Page d'historique";

    const fetchDiagnoses = async () => {
      try {
        const userId = getUserIdFromLocalStorage();
        const data = await fetchDataByUserId(userId);
        setDiagnoses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching diagnosis data:", error);
        setLoading(false);
      }
    };

    fetchDiagnoses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDataById(id);
      setDiagnoses(diagnoses.filter((diagnosis) => diagnosis.id !== id));
      // console.log("Diagnosis deleted successfully");
    } catch (error) {
      console.error("Error deleting diagnosis:", error);
    }
  };

  const navigateToDiagnosis = (id) => {
    navigate(`/details/${id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDiagnoses = diagnoses.filter((diagnosis) =>
    diagnosis.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading visible={loading} />

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
                        <h2>Diagnostics</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="row show-up d-flex justify-content-center">
                <div className="col-lg-6 mb-5">
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </div>
              {/* End of Search Bar */}

              <div className="row">
                <div className="col-lg-12 align-self-center show-up">
                  {loading ? (
                    <p>Chargement...</p>
                  ) : filteredDiagnoses.length === 0 ? (
                    <p>Aucun diagnostic trouvé</p>
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
                        {filteredDiagnoses.map((diagnosis, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{diagnosis.title}</td>
                            <td>{diagnosis.date}</td>
                            <td>
                              <button
                                onClick={() =>
                                  navigateToDiagnosis(diagnosis.id)
                                }
                                className="btn btn-primary"
                              >
                                Visite
                              </button>
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
    </div>
  );
}
