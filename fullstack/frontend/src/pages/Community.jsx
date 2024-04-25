import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";

import Loading from "../components/Loading/Loading";

export default function Community() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Page de communauté";
  }, []); // This effect runs only once after the initial render

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
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
                        <h6>Diagnostiques de la</h6>
                        <h2>Communauté</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 show-up">
                <div className="blog-post">
                  <div className="down-content">
                    <span className="category">Type</span>
                    <span className="date">dd/mm/yyyy</span>
                    <a href="#">
                      <h4>Title</h4>
                    </a>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugit odio ad numquam enim recusandae similique natus?
                      Minima quam dolor, ab dolores, repudiandae enim placeat
                      ratione maiores soluta, dolore tenetur fugit.
                    </p>
                    <span className="author">userid</span>
                    <div className="border-first-button">
                      <a href="#">Vérifier</a>
                    </div>
                  </div>
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
