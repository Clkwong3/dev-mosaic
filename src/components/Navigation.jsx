const Navigation = ({ changePage }) => {
  // Create a navigation bar with links that trigger the changePage function
  return (
    <header>
      <nav className="navbar-menu ">
        <div className="link" onClick={() => changePage("aboutMe")}>
          <a href="/about">About Me</a>
        </div>
        |
        <div className="link" onClick={() => changePage("portfolio")}>
          <a href="/portfolio">Portfolio</a>
        </div>
        |
        <div className="link" onClick={() => changePage("contactMe")}>
          <a href="/contact">Contact Me</a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
