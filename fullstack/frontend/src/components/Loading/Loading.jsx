import React, { useState, useEffect } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the loading component after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return isVisible ? (
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
  ) : null;
}
