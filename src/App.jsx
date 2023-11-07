import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  // Render the components and the appropriate page based on the current selection
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
