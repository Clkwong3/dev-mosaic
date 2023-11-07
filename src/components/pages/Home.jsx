// Define an Home component using an arrow function
import avatar from "../assets/etched.png";
import "../../../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <img src={avatar} alt="My Avatar" className="avatar" />
        <h1>Crafting My Web, One Line at a Time</h1>
        <p>
          Hello, I'm Clarice.
          <br /> I'm a web developer passionate about creating websites that
          stand out and work seamlessly. <br />
          Feel free to explore my work and get in touch if you have any
          questions or opportunities to collaborate.
        </p>
      </header>

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
