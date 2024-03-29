import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo_White from "../../Shared/Logo_White.png";
import { email, Location, instagram, phone, youtube, facebook } from "../../Utils/Icons";
import "./Footer.style.scss";

class Footer extends Component {
  renderAbout() {
    return (
      <>
        <div className="Left-Side">
          <div className="Footer-Logo">
            <img
              loading="lazy"
              className="Logo-Image"
              src={Logo_White}
              alt="Logo"
            />
          </div>
        </div>
      </>
    );
  }

  renderLinks() {
    const { links = [] } = this.props;
    return (
      <div className="Center">
        <h4 className="Title">Quick Links</h4>
        <ul className="Links-Wrapper">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  contactUs() {
    return (
      <div className="Right-Side">
        <h4 className="Title">Contact Us</h4>
        <span className="Details-Wrapper">
          <i className="Icons">{phone()}</i>
          9791678582, 9952383862, 9159954482.
        </span>
        <span className="Details-Wrapper">
          <i className="Icons">{email()}</i>
          thephotomaninfo@gmail.com
        </span>
        <span className="Details-Wrapper Address">
          <i className="Icons">{Location()}</i>
          No 72 ramana gounder nagar, sankaralinganar street, Maniyakarpalayam
          Coimbatore Tamil Nadu 641006 India
        </span>
      </div>
    );
  }

  copyRights() {
    return (
      <p className="Copy-Rights">
        Copyright © {new Date().getFullYear()} by ThePhotoman. All rights reserved.
      </p>
    );
  }

  socialMedia() {
    return (
      <div className="Social-Media">
        <a
          className="Icons"
          href=" https://instagram.com/thephotomanphotography?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          {instagram()}
        </a>
        <a
          className="Icons"
          href="https://youtube.com/@thephotomanphotography4953"
          target="_blank"
          rel="noreferrer"
        >
          {facebook()}
        </a>
        <a
          className="Icons"
          href="https://youtube.com/@thephotomanphotography4953"
          target="_blank"
          rel="noreferrer"
        >
          {youtube()}
        </a>
      </div>
    );
  }

  footerBottom() {
    return (
      <div className="Footer-Bottom">
        {this.copyRights()}
        {this.socialMedia()}
      </div>
    );
  }

  renderMobileFooter() {
    return (
      <p className="Copy-Rights-Mobile">Copyright © {new Date().getFullYear()} by ThePhotoman.</p>
    );
  }

  render() {
    return (
      <>
        <footer className="Footer-Container">
          <div className="Footer-Wrapper">
            <div className="Row">
              {this.renderAbout()}
              {this.renderLinks()}
              {this.contactUs()}
            </div>
            {this.footerBottom()}
          </div>
        </footer>
        {this.renderMobileFooter()}
      </>
    );
  }
}

export default Footer;
