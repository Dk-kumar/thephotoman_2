import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mediaURL } from "../../Utils/EndPoints";
import { headerData } from "../../mock/header";
import photoManWhite from "../../Shared/photoManWhite.png";


import "./Header.style.scss";

const HomePageURL = "/";
class Header extends Component {

  renderLogo(src, alt) {
    return (
      <div className="Image-Wrapper">
        <img
          className="Image"
          loading="lazy"
          // src={`${mediaURL}${src}`}
          src={photoManWhite}
          alt={alt}
        />
      </div>
    );
  }

  handleNavLinks() {
    const { block: { blockList = [{}] } = {} } = this.props;
    const [{ attributes: Nav_Links } = {}] = blockList;

    return (
      <nav className="Nav">
        {headerData?.attributes?.Nav_Links?.map((navLink) => {
          return (
            <Link to={`${navLink.url}`} className="Nav-Links">
              {navLink.name !== "Logo"
                ? navLink.name
                : this.renderLogo(navLink.Logo, navLink.name)}
            </Link>
          );
        })}
      </nav>
    );
  }

  render() {
    const {
      router: { location: { pathname = "" } = {} },
    } = this.props;
    const isHome = pathname === HomePageURL ? false : true;

    return (
      <header className={`Header-Container ${isHome ? "NotHome" : "InHome"}`}>
        {this.handleNavLinks()}
      </header>
    );
  }
}

export default Header;
