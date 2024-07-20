// Import React and necessary hooks/components
import React, { useEffect, useContext, useState } from "react";
import { clearUserIdFromLocalStorage } from "../services/logged_userId";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import Loading from "../components/Loading/Loading"; // Adjust path as needed

const Logout = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  useEffect(() => {
    let intervalId;

    const checkBackendAvailability = async () => {
      try {
        const backendURL = "http://127.0.0.1:8080";
        const isBackendAvailable = await fetch(backendURL, { method: "HEAD" })
          .then(response => response.ok)
          .catch(() => false);

        if (!isBackendAvailable) {
          clearUserIdFromLocalStorage();
          setIsLoggedIn(false);
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking backend availability:", error);
      }
    };

    // Initial check on component mount
    checkBackendAvailability();

    // Interval to periodically check backend availability
    intervalId = setInterval(checkBackendAvailability, 5000); // Check every 5 seconds (5000 milliseconds)

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [navigate, setIsLoggedIn]);

  // Show loading indicator while waiting for logout process to complete
  if (loading) {
    return <Loading />; // Render loading component until loading state is false
  }

  return null; // Once loading is false, return null (or other UI if needed)
};

export default Logout;
