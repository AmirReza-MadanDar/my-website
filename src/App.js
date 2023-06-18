import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages";
import "./loading.css";
import loadingGif from "./images/15.gif";
import React, { useEffect, useState } from "react";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setIsLoaded(true);
    };
  }, []);
  return (
    <div className={`page-content ${isLoaded ? "loaded" : "loading"}`}>
      <div className="loader">
        <img src={loadingGif} alt="لودینگ" />
      </div>
      <div className="content">
        <Router>
          <Pages />
        </Router>
      </div>
    </div>
  );
};

export default App;
