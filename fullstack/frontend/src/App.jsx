import Home from './pages/Home'

// Local CSS files
import './assets/css/templatemo-digimedia-v3.css';
import './assets/css/animated.css';
import './assets/css/owl.css';

// Import Local JS functions
import $ from "jquery";
import customScript from "./assets/js/custom.js";

$(document).ready(function () {
  customScript();
});

// Import the Font Awesome CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
