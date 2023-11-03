// Define a ContactForm component using an arrow function
const ContactForm = () => {
  return (
    // Start the form within a div with the class "contact-form"
    <div className="contact-form">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

// Export the ContactForm
export default ContactForm;
