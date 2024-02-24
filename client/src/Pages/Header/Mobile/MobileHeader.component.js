import React, { Component } from "react";
import { Link } from "react-router-dom";
import photoManWhite from "../../../Shared/photoManWhite.png";
import photoManBlack from "../../../Shared/photoManBlack.png";

import {
  menuIcon,
  twitter,
  instagram,
  facebook,
  youtube,
  closeIcon,
  backIcon,
  blackMenuIcon,
  searchIcon,
} from "../../../Utils/Icons";
import "./MobileHeader.style.scss";
import { headerData } from "../../../mock/header";


const HomePageURL = "/";

class MobileHeader extends Component {
  headerLogo() {
    const { handleMenu, findingRouter } = this.props;
    const {
      router: { location: { pathname = "" } = {} },
    } = this.props;
    const isHome = pathname === HomePageURL ? false : true;

    let mapState = findingRouter();

    return (
      <div
        className={`header-container ${isHome ? "NotHomeMob" : "InHomeMob"}`}
      >
        <div className="search">{mapState && searchIcon()}</div>
        <div className="search">{!mapState && backIcon()}</div>
        <div className="logo">
          {/* <img src={ mapState ? logo() : blackLogo()} alt="logo" className="header-logo" /> */}
          <Link to={HomePageURL}>
            <img
              src={mapState ? photoManWhite : photoManBlack}
              loading="lazy"
              alt="header-logo"
              className="header-logo"
            />
          </Link>
        </div>
        <div className="menu" onClick={handleMenu}>
          {mapState ? menuIcon() : blackMenuIcon()}
        </div>
        {this.sideNav()}
      </div>
    );
  }

  sideNav() {
    const { handleMenu } = this.props;
    const { block: { blockList = [{}] } = {} } = this.props;
    const [{ attributes: Nav_Links } = {}] = blockList;
    // const links = headerData?.Nav_Links.filter((res) => res.url !== "/");

    return (
      <div id="sidenav" className="sidenav">
        <div className="top-area" onClick={handleMenu}>
          <div className="logo">
            <img src={photoManBlack} alt="logo" className="header-logo" />
          </div>
          <span className="closebtn">{closeIcon()}</span>
        </div>
        <ul className="bottom-area">
          <Link to={HomePageURL}>
            <span onClick={handleMenu}>{"Home"}</span>
          </Link>
          {headerData?.attributes?.Nav_Links.map((elem, index) => {
            return (
              <Link to={`${elem.url}`} key={index} className="nav-links">
                <span onClick={handleMenu}>{elem.name}</span>
              </Link>
            );
          })}
        </ul>
        <div className="flex-grow"></div>
        <div className="social-icons">
          {instagram()}
          {twitter()}
          {facebook()}
          {youtube()}
        </div>
      </div>
    );
  }

  render() {
    return <>{this.headerLogo()}</>;
  }
}

export default MobileHeader;
