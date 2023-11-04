const Navigation = ({ changePage, currentPage }) => {
  // Create a navigation bar with links that trigger the changePage function
  console.log(currentPage);
  return (
    <header>
      <nav className="navbar-menu ">
        <div
          className={currentPage === "aboutMe" ? "link active" : "link"}
          onClick={() => changePage("aboutMe")}
        >
          <a href="/about">About Me</a>
        </div>
        |
        <div
          className={currentPage === "portfolio" ? "link active" : "link"}
          onClick={() => changePage("portfolio")}
        >
          <a href="/portfolio">Portfolio</a>
        </div>
        |
        <div
          className={currentPage === "contactMe" ? "link active" : "link"}
          onClick={() => changePage("contactMe")}
        >
          <a href="/contact">Contact Me</a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
