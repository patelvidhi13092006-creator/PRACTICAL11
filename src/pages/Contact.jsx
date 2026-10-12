import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container">
      <section className="hero">
        <h1>Contact Us</h1>
        <p>
          Have a question? Fill out the form below
          and let us know how we can help.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Ahmedabad, Gujarat, India</p>
          <p>We welcome your questions and suggestions.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Message</button>

          {submitted && (
            <p className="success">
              Thank you! Your form has been submitted.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contact;