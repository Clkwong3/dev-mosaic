const Navigation = () => {
  // Define styles for links and separators
  const linkStyle = { margin: "10px" };

  const separatorStyle = { margin: "5px" };

  // Creates a navigation bar with links and separators displayed in a horizontal row.
  // Use a <span> for the "|" separator
  return (
    <nav className="navbar-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "fantasy",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={linkStyle}>
          <a href="#">About Me</a>
        </div>
        <span style={separatorStyle}>|</span>{" "}
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <span style={separatorStyle}>|</span>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <span style={separatorStyle}>|</span>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
