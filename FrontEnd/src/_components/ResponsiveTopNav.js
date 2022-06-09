import "./ResponsiveTopNav.css";

import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

import { CgMenuGridO } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../_assets/alien_logo.png";
import React from "react";
import { useState } from "react";

const ResponsiveTopNav = (props) => {
  const links = ["link1", "link2", "link3", "link4", "link5"];
  const [active, setActive] = useState(null);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  return (
    <div>
      <nav className="top-nav">
        <div className="top-nav-logo">
          <img className="logo" src={Logo} alt="#" />
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
            <Link className="nav-link" to={`/${link}`}>
              <li
                className={active === link && "active"}
                onClick={() => setActive(link)}
              >
                {link}
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
            <Link className="nav-link" to={`/${link}`}>
              <li
                className={active === link && "active"}
                onClick={() => {
                  setActive(link);
                  setMobileMenuActive(false);
                }}
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveTopNav;
