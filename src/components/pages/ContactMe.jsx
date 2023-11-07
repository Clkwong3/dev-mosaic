// Import the ContactForm component from a file located in the parent directory
import ContactForm from "../ContactForm";

// Define a ContactMe component using an arrow function
const ContactMe = () => {
  return (
    // Create a container div with the class "contact-content"
    <div className="contact-content face">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me. I look forward to hearing from you!
      </p>
      <ContactForm />
    </div>
  );
};

// Export the ContactMe page
export default ContactMe;
