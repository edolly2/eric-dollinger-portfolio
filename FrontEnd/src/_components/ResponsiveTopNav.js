import "./ResponsiveTopNav.css";

import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

import { CgMenuGridO } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../_assets/alien_logo.png";
import React from "react";
import { useState } from "react";

const ResponsiveTopNav = (props) => {
  const links = ["", "About", "Portfolio", "Projects", "Contact", "Blog"];
  const [active, setActive] = useState(null);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  return (
    <div className="navigation-container">
      <nav className="top-nav">
        <div className="top-nav-logo">
          <Link to="home" onClick={() => setActive("Home")}>
            <img className="logo" src={Logo} alt="#" />
          </Link>
        </div>
        <div className="hamburger-menu-btn">
          <CgMenuGridO
            onClick={() => {
              setMobileMenuActive(!mobileMenuActive);
            }}
          />
        </div>
        <ul className="top-nav-link-list">
          {links.map((link) => (
            <Link className="nav-link" to={`/${link.toLowerCase()}`}>
              <li
                className={active === link && "active"}
                onClick={() => {
                  setActive(null);
                  setActive(link);
                }}
              >
                {!link[0] ? "Home" : link}
              </li>
            </Link>
          ))}
        </ul>
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
      </nav>
      <nav
        className="mobile-nav"
        style={{ display: mobileMenuActive ? "flex" : "none" }}
      >
        <ul className="mobile-nav-list">
          {links.map((link) => (
            <Link className="nav-link" to={`/${link.toLowerCase()}`}>
              <li
                className={active === link && "active"}
                onClick={() => {
                  setActive(link);
                  setMobileMenuActive(false);
                }}
              >
                {!link[0] ? "Home" : link}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveTopNav;
