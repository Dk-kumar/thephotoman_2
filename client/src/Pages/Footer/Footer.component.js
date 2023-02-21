import React, { Component } from "react";
import Logo_White from "../../Shared/Logo_White.png";
import {
  email,
  facebook,
  Location,
  instagram,
  phone,
  twitter,
  youtube,
} from "../../Utils/Icons";
import "./Footer.style.scss";

class Footer extends Component {
  renderAbout() {
    return (
      <>
        <div className="Left-Side">
          <div className="Footer-Logo">
            <img loading="lazy" className="Logo-Image" src={Logo_White} alt="Logo" />
          </div>
        </div>
      </>
    );
  }

  renderLinks() {
    const { links } = this.props;
    return (
      <div className="Center">
        <h4 className="Title">Quick Links</h4>
        <ul className="Links-Wrapper">
          {links.map((link) => {
            return <li key={link.id}>{link.title}</li>;
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
          +1 123-456-0606
        </span>
        <span className="Details-Wrapper">
          <i className="Icons">{email()}</i>
          thephotoman@gmail.com
        </span>
        <span className="Details-Wrapper">
          <i className="Icons">{Location()}</i>
          120 King St, Charleston SC 29401, USA
        </span>
      </div>
    );
  }

  copyRights() {
    return (
      <p className="Copy-Rights">
        Copyright © 2023 by ThePhotoman. All rights reserved.
      </p>
    );
  }

  socialMedia() {
    return (
      <div className="Social-Media">
        <div className="Icons">{instagram()}</div>
        <div className="Icons">{twitter()}</div>
        <div className="Icons">{facebook()}</div>
        <div className="Icons">{youtube()}</div>
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

  render() {
    return (
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
    );
  }
}

export default Footer;
