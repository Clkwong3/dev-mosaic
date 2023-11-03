import ContactForm from "../ContactForm";

const ContactMe = () => {
  return (
    <div className="contact-content">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me. I'd love to hear from you!</p>

      <ContactForm />

      <div className="contact-info">
        <p>You can also connect with me through:</p>
        <ul>
          <li>
            <a href="mailto:your.email@example.com">
              Email: your.email@example.com
            </a>
          </li>
          <li>
            <a href="[Your LinkedIn URL]">LinkedIn: [Link]</a>
          </li>
          <li>
            <a href="https://github.com/Clkwong3">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
