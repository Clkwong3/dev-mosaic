// Define a Portfolio component using an arrow function
const Portfolio = () => {
  return (
    // Start with a container div with the class "portfolio-content"
    <div className="portfolio-content">
      <h1>Portfolio</h1> 

      <div className="project">
        <h2>Card Flip - Memory Game</h2> 
        <p>
          Challenge your memory and have a spooktacular time with this
          Halloween-themed memory game! Flip the cards to uncover eerie pairs
          and test your recall skills.
        </p>
        <div className="project-links">
          <a href="https://clkwong3.github.io/memory-card-game">
            {" "}
            Play the Game
          </a>{" "}
          <a href="https://github.com/Clkwong3/memory-card-game">
            {" "}
            View the Code
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

// Export the Portfolio page 
export default Portfolio;
