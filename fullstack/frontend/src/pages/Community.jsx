import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";

// Export APIs
import { fetchData } from "../services/apiDiagnosis";

export default function Community() {
  useEffect(() => {
    document.title = "SANTÉIA - Page de communauté";
  }, []);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromLocalJson = async () => {
      try {
        const jsonData = await fetchData();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        // Handle error
        setLoading(false);
      }
    };

    fetchDataFromLocalJson();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />

      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 mb-5 align-self-center">
                  <div className="left-content show-up header-text">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Diagnostiques de la</h6>
                        <h2>Communauté</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row show-up">
              {loading ? (
                <p>Chargement...</p>
              ) : data && data.length > 0 ? (
                data.map((item) => (
                  <div className="col-lg-4 mb-4 d-flex" key={item.id}>
                    <div className="blog-post">
                      <div className="down-content">
                        <span className="category">Diagnostic</span>
                        <span className="date">{item.date}</span>

                        <h4>{item.title}</h4>

                        <p>{item.description}</p>

                        <div className="bottom-content">
                          {/* <span className="author">
                            ID de l'utilisateur: {item.userId}
                          </span> */}
                          <div className="border-first-button">
                            <Link to={`/details/${item.id}`}>Visite</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Pas de données disponibles</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
