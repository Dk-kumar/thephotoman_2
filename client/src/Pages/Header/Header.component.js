import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mediaURL } from "../../Utils/EndPoints";
import "./Header.style.scss";
class Header extends Component {
  state = {};

  renderLogo(src, alt) {
    return (
      <div className="Image-Wrapper">
        <img className="Image" src={`${mediaURL}${src}`} alt={alt} />
      </div>
    );
  }

  handleNavLinks() {
    const {
      block: { blockList = [{}] },
    } = this.props;
    const [{ attributes: Nav_Links } = {}] = blockList;
    console.log(Nav_Links, blockList);
    return (
      <nav>
        {Nav_Links?.Nav_Links?.map((navLink) => {
          return (
            <Link to={navLink.url} className="Nav-Links">
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
    return <header>{this.handleNavLinks()}</header>;
  }
}

export default Header;
