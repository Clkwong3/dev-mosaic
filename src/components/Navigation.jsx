const Navigation = ({ changePage }) => {
  // Define styles for links and separators
  const linkStyle = { margin: "10px" };
  const separatorStyle = { margin: "5px" };

  // Create a navigation bar with links that trigger the changePage function
  return (
    <nav className="navbar-menu">
      <section>
        <div style={linkStyle} onClick={() => changePage("aboutMe")}>
          <a href="#">About Me</a>
        </div>
        <span style={separatorStyle}>|</span>{" "}
        <div style={linkStyle} onClick={() => changePage("portfolio")}>
          <a href="#">Portfolio</a>
        </div>
        <span style={separatorStyle}>|</span>
        <div style={linkStyle} onClick={() => changePage("contactMe")}>
          <a href="#">Contact Me</a>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
