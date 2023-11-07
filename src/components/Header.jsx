import avatar from "./assets/etched.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="hero">
      <Navigation />
      <img src={avatar} alt="My Avatar" className="avatar" />
      <h1>Crafting My Web, One Line at a Time</h1>
      <p>
        Hello, I'm Clarice.
        <br /> I'm a web developer passionate about creating websites that stand
        out and work seamlessly. <br />
        Feel free to explore my work and get in touch if you have any questions
        or opportunities to collaborate.
      </p>
    </header>
  );
};

export default Header;
