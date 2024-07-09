import React from "react";
import "./contact.css";

const Contact = () => (
  <div className="contact-container">
    <h2>Contact Us</h2>
    <form className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" name="subject" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Contact;
