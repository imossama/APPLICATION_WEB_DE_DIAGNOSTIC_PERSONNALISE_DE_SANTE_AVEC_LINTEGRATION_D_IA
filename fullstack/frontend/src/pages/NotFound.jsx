import React, { useEffect } from "react";
import image_404_error from "../assets/images/404-error.png";

import Loading from "../components/Loading/Loading";

function NotFound() {
  useEffect(() => {
    // Update the document title
    document.title = "SANTÉIA - Pas trouvé";
  }, []); // This effect runs only once after the initial render

  return (
    <>
      <Loading />

      <div className="error404 container d-flex justify-content-center align-items-center vh-100">
        <img src={image_404_error} alt="" />
      </div>
    </>
  );
}

export default NotFound;
