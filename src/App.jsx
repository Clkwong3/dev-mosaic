import { useState } from "react";

import Navigation from "./components/Navigation";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import ContactMe from "./components/pages/ContactMe";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  // Use state to track the currently displayed page
  const [currentPage, setCurrentPage] = useState("aboutMe");

  // Change the currently displayed page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Render the Navigation component and the appropriate page based on the current selection
  return (
    <div>
      <Navigation changePage={changePage} currentPage={currentPage} />
      <Outlet />
    </div>
  );
}

export default App;
