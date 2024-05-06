import React, { useEffect } from "react";
import $ from "jquery";

function DataLoading({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      // Show loading component
      $("#js-preloader").removeClass("loaded");
    } else {
      // Hide loading component
      $("#js-preloader").addClass("loaded");
    }
  }, [isLoading]);

  return (
    <div id="js-preloader" className={`js-preloader ${isLoading ? '' : 'loaded'}`}>
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

export default DataLoading;
