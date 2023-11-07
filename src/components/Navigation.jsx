import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  // Create a navigation bar with links that trigger the changePage function
  return (
    <nav className="navbar-menu ">
      <div className={pathname === "home" ? "link active" : "link"}>
        <a href="/">Home</a>
      </div>
      |
      <div className={pathname === "/about" ? "link active" : "link"}>
        <a href="/about">About Me</a>
      </div>
      |
      <div className={pathname === "portfolio" ? "link active" : "link"}>
        <a href="/portfolio">Portfolio</a>
      </div>
      |
      <div className={pathname === "contactMe" ? "link active" : "link"}>
        <a href="/contact">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navigation;
