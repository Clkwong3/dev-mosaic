// Define an Home component using an arrow function
import "../../../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Front-End Development</li>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5 & CSS</li>
          <li>Responsive Design</li>
          <li>Back-End Development</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>API Integration</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <img src="/project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>
            A brief description of your project goes here. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <a href="/project1" target="_blank">
            View Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
