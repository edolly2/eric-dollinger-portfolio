import "./ContactPage.css";

import React from "react";

const ContactPage = () => {
  return (
    <div className="page">
      <h1 className="page-title">Contact Me</h1>
      <div className="contact-form-container">
        <form>
          <div className="form-identity">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
          <div className="form-comments">
            <label for="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows="15"
              cols="45"
              placeholder="Your Thoughts..."
              required
            />
          </div>
          <div className="form-btn">
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
