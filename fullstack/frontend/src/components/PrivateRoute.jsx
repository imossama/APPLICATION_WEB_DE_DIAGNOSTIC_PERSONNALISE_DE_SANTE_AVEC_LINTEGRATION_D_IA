import React from "react";
import { Route, Navigate } from "react-router-dom";

// Services
import { getUserIdFromLocalStorage } from "../services/logged_userId";

const PrivateRoute = ({ children }) => {
  const auth = getUserIdFromLocalStorage();
  return auth != null ? children : <Navigate to="/login" replace/>;
};

export default PrivateRoute;
