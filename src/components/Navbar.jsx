import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.svg";
import Menu from "/menu.svg";
import MenuCancel from "/menu cancel.svg";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={Logo} alt="Company logo" />
        </Link>

        <div className="navbar-buttons desktop">
          <Link to="/F&B" className="secondary-button">
            Food & Beverage
          </Link>
          <a href="#Contact" className="primary-button">
            Request Audit
          </a>
        </div>
        <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
          <img
            src={Menu}
            alt="Mobile navbar open"
            style={{
              display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
            }}
          />
          <img
            src={MenuCancel}
            alt="Mobile navbar close"
            style={{
              display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
            }}
          />
        </div>
        <div
          className={`mobileNavbar mobile ${
            isMobileNavOpen
              ? "activeMobileNavbar"
              : hasToggled
                ? "nonactiveMobileNavbar"
                : ""
          }`}
        >
          <div className="navbar-links desktop">
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/F&B" onClick={handleLinkClick}>
              Food & Beverage
            </Link>
            <Link to="/privacy-policy" onClick={handleLinkClick}>
              Privacy Policy
            </Link>
          </div>
          <div className="mobileNavbar-bottom">
            <a
              href="#Contact"
              className="primary-button"
              onClick={handleLinkClick}
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
