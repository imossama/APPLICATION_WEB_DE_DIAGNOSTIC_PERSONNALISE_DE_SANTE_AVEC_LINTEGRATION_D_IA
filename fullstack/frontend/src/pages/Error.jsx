import React, { useEffect } from "react";
import image_429_error from "../assets/images/429-error.png";

function Error({ error }) {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Erreur";

    console.log("SanteIA : 428 Error\n", error);
  }, []); // This effect runs only once after the initial render

  return (
    <>
      <div className="error404 container d-flex justify-content-center align-items-center vh-100">
        <img src={image_429_error} alt="" />
      </div>
    </>
  );
}

export default Error;
