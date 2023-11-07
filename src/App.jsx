import { Outlet } from "react-router-dom";
import Home from "./components/pages/Home";
import Navigation from "./components/Navigation";

function App() {
  // Render the components and the appropriate page based on the current selection
  return (
    <div>
      <Navigation />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
