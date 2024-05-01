import React, { useEffect } from "react";
import { clearUserIdFromLocalStorage } from "../services/logged_userId";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to clear user ID from local storage and navigate to login page
    const logoutAndNavigate = () => {
      clearUserIdFromLocalStorage();
      navigate("/login");
    };

    // Call the logout function when the component mounts
    logoutAndNavigate();
  }, [navigate]); // Ensure navigate is added as a dependency to useEffect

  // Render nothing, since the navigation happens inside useEffect
  return null;
};

export default Logout;
