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

// Import Components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ScrollToElement from "./components/ScrollToElement.jsx";
import Informations from "./pages/Informations.jsx";
import Medical from "./pages/Medical.jsx";
import Question from "./pages/Question.jsx";
import Qcm from "./pages/Qcm.jsx";
import Result from "./pages/Result.jsx";
import History from "./pages/History.jsx";
import Community from "./pages/Community.jsx";
import Details from "./pages/Details.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";

function App() {
  return (
    <>
      <Router>
        <ScrollToElement />
        <Routes>
          {/* Home Page Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/index" element={<Home />} />
          {/* Login Page Route */}
          <Route path="/login" element={<Login />} />
          {/* Register Page Route */}
          <Route path="/register" element={<Register />} />
          {/* Informations Page Route */}
          <Route path="/informations" element={<Informations />} />
          {/* Medical Page Route */}
          <Route path="/medical" element={<Medical />} />
          {/* Question Page Route */}
          <Route path="/question" element={<Question />} />
          {/* QCM Page Route */}
          <Route path="/qcm" element={<Qcm />} />
          {/* Result Page Route */}
          <Route path="/result" element={<Result />} />
          {/* History Page Route */}
          <Route path="/history" element={<History />} />
          {/* Community Page Route */}
          <Route path="/community" element={<Community />} />

          {/* Diagnosis Details Page Route */}
          <Route path="details/:id" element={<Details />} />

          {/* Profile Setting Page Route */}
          <Route path="settings" element={<ProfileSettings/>}/>

          {/* Fallback route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
