import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Local JS functions
import $ from "jquery";
import customScript from "./assets/js/custom.js";
import owlScript from "./assets/js/owl-carousel.js";

$(document).ready(function () {
  customScript();
  owlScript();
});

// Import the Font Awesome CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";

// Local CSS files
import "./assets/css/templatemo-digimedia-v3.css";
import "./assets/css/owl.css";

// Import Components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ScrollToElement from "./components/ScrollToElement.jsx";
import History from "./pages/History.jsx";
import Community from "./pages/Community.jsx";
import Details from "./pages/Details.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
import Logout from "./components/Logout.jsx";
import SequentialFlow from "./pages/SequentialFlow.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import UpperContact from "./components/UpperContact/UpperContact.jsx";
import Footer from "./components/Footer/Footer.jsx";

import PrivateRoute from "./components/PrivateRoute";
import IsUnlogged from "./components/IsUnlogged";

function App() {
  return (
    <>
      <Router>
        <UpperContact />
        <Navbar />

        <ScrollToElement />

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
          <Route path="/history" element={<History />} />
          {/* Community Page Route */}
          <Route path="/community" element={<Community />} />
          {/* Private Routes */}
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
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
    </>
  );
}

export default App;
