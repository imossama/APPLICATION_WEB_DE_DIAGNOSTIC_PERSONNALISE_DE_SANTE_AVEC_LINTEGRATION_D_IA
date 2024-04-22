import React from "react";

export default function UpperContact() {
  return (
    <div className="pre-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8 col-7">
            <ul className="info">
              <li>
                <a href="#">
                  <i className="fa fa-envelope"></i>santeia.dev@santeia.ma
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i>059-121-1516
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 col-5">
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
