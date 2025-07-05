import React, { useState } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "439ff133-4211-4417-b16b-9e7999a06f50");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <MdEmail className="contact-icon" />
              <p>sonalirpatil361@gmail.com</p>
            </div>

            <div className="contact-detail">
              <FiPhoneCall className="contact-icon" />
              <p>+91 8591701120</p>
            </div>

            <div className="contact-detail">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>

          {/* Feedback message */}
          {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
      {/* Add below your form */}
      <Link to="/" className="back-home-btn">
        ← Back to Home
      </Link>
    </div>
  );
};

export default Contact;
