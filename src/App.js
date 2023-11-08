import "./App.css";
import Routings from "./Components/main/Routes/Routes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const location = useLocation(); // If using React Router

  useEffect(() => {
    // Initialize Google Analytics and track pageview
    window.gtag("config", "G-VHPMQ72SPJ", { page_path: location.pathname }); // Replace with your Tracking ID
  }, [location]);
  return (
    <div className="">
      <Routings />
    </div>
  );
}

export default App;
