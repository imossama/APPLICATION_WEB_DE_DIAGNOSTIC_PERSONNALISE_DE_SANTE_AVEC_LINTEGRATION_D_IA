import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserIdFromLocalStorage } from "../services/logged_userId";

export default function IsUnlogged({ children }) {
  const auth = getUserIdFromLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth != null) {
      const previousUrl = document.referrer;
      if (previousUrl && (previousUrl.includes('/login') || previousUrl.includes('/register'))) {
        navigate('/home');
      } else {
        navigate(-1);
      }
    }
  }, [auth, navigate]);

  // Render children only if user is not logged in
  return auth == null ? children : null;
}
