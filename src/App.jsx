import { useState } from "react";

import Navigation from "./components/Navigation";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import ContactMe from "./components/pages/ContactMe";

function App() {
  // Use state to track the currently displayed page
  const [currentPage, setCurrentPage] = useState("aboutMe");

  // Function to change the currently displayed page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Render the Navigation component and the appropriate page based on the current selection
  return (
    <div>
      <Navigation changePage={changePage} />
      {currentPage === "aboutMe" && <AboutMe />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "contactMe" && <ContactMe />}
    </div>
  );
}

export default App;
