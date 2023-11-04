import { Outlet } from "react-router-dom";

import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  // Render the Navigation component and the appropriate page based on the current selection
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
