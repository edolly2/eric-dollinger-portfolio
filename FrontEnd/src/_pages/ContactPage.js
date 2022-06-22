import "./ContactPage.css";

import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

import { FaLinkedinIn } from "react-icons/fa";
const ContactPage = () => {
  return (
    <div className="page contact-page">
      <h1 className="page-title">Contact Me</h1>
      <ul className="top-nav-social-list">
        <li className="social-link">
          <FaLinkedinIn />
        </li>
        <li className="social-link">
          <BsFacebook />
        </li>
        <li className="social-link">
          <BsTwitter />
        </li>
        <li className="social-link">
          <BsGithub />
        </li>
      </ul>

      <h2 className="contact-form-title">Share Your Thoughts</h2>
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
