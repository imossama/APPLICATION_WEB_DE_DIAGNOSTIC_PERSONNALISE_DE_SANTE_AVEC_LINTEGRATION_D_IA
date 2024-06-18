// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Local JS functions
import $ from "jquery";
import customScript from "./assets/js/custom.js";

$(document).ready(function () {
customScript();
});

// Import the Font Awesome CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";

// Local CSS files
import "./assets/css/templatemo-digimedia-v3.css";
import "./assets/css/owl.css";

import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import UpperContact from "./components/UpperContact/UpperContact";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";
import Community from "./pages/Community";
import Details from "./pages/Details";
import ProfileSettings from "./pages/ProfileSettings";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import IsUnlogged from "./components/IsUnlogged";
import SequentialFlow from "./pages/SequentialFlow";

function App() {
  return (
    <AuthProvider>
      <Router>
        <UpperContact />
        <Navbar />
        <Routes>
          {/* Home Page Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/index" element={<Home />} />
          {/* Login Page Route */}
          <Route
            path="/login"
            element={
              <IsUnlogged>
                <Login />
              </IsUnlogged>
            }
          />
          {/* Register Page Route */}
          <Route
            path="/register"
            element={
              <IsUnlogged>
                <Register />
              </IsUnlogged>
            }
          />
          {/* History Page Route */}
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          {/* Community Page Route */}
          <Route path="/community" element={<Community />} />
          {/* Private Routes */}
          <Route
            path="/details/:id"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <ProfileSettings />
              </PrivateRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            }
          />
          <Route
            path="/diagnostic"
            element={
              <PrivateRoute>
                <SequentialFlow />
              </PrivateRoute>
            }
          />
          {/* Fallback route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
