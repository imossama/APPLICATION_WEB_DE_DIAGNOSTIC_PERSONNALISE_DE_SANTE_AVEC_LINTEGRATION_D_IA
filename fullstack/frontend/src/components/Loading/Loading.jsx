import React, { useState, useEffect } from "react";
import $ from "jquery";

function Loading() {
  useEffect(() => {
    // Show loading component
    $("#js-preloader").removeClass("loaded");

    // Hide loading component after 2 seconds
    const timeout = setTimeout(() => {
      $("#js-preloader").addClass("loaded");
    }, 500);

    // Clear the timeout when the component unmounts or when 2 seconds elapsed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
