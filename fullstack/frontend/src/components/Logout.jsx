// Logout.jsx

import React, { useEffect, useContext } from "react";
import { clearUserIdFromLocalStorage } from "../services/logged_userId";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext"; // Make sure this path is correct

const Logout = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext); // Assuming you are using useContext to access AuthContext

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await clearUserIdFromLocalStorage();
        setIsLoggedIn(false); // Example usage of setIsLoggedIn from AuthContext
        navigate("/login");
      } catch (error) {
        console.error("Error during logout:", error);
        // Handle any error condition, maybe show an error message or retry logic
      }
    };

    handleLogout();
  }, [navigate, setIsLoggedIn]);
};

export default Logout;
