// Define an AboutMe component using an arrow function
const AboutMe = () => {
  return (
    // Create a container div with the class "about-me"
    <div className="about-me">
      <h1>About Me</h1>
      <div className="about-me-content">
        <p>
          Hey there, I'm Clarice, a budding web developer with an insatiable
          curiosity for all things code-related and a passion for solving coding
          puzzles. My journey into web development was sparked by a fascination
          for how computers bring creative ideas to life. I'm a firm believer in
          learning by doing and thrive on the challenges of web development
          while constantly seeking opportunities to learn and grow.
          <br />
          <br />
          This website is a window into my progress, offering a platform to
          share my insights and experiences in the dynamic world of web
          development. Feel free to explore my portfolio and reach out if you'd
          like to collaborate or simply have a friendly chat. I'm always excited
          to connect with fellow developers and enthusiasts.
          <br />
          <br />
          When I'm not coding, you can find me sketching on my iPad, exploring
          the great outdoors on park and urban trails, and embarking on exciting
          new projects. Thanks for dropping by, and I hope you have a fantastic
          time exploring!
        </p>
      </div>
    </div>
  );
};

// Export the AboutMe component for use in other parts of the application
export default AboutMe;
