import React, { Component } from "react";
import RecentStorysContainer from "../RecentStorys/RecentStorys.conyainer";
import { mediaURL } from "../../Utils/EndPoints";
import YouTubeWidget from "../YouTubeWidget/YouTubeWidget.component";
import "./Collections.style.scss";
import { Link } from "react-router-dom";
import { collectionData } from "../../mock/collection";

class Collections extends Component {
  renderHeading() {
    return (
      <div className="Heading-Wrapper">
        <div className="Text-Wrapper">
          <div className="Line" />
          <div className="Text-Container">
            <p className="Small-Text">Browse</p>
            <p className="Big-Text">By Collection</p>
          </div>
          <div className="Line" />
        </div>
      </div>
    );
  }

  renderCollections() {
    const {
      collections: { collectionList },
    } = this.props;

    return (
      <>
        {this.renderHeading()}
        <div className="Card-Container">
          {collectionData.map((res) => {
            return (
              <Link to={`/gallery/${res.attributes.name.replace(/ +/g, "") }`} className="Collections-Card" key={res.id}>
                <img
                  src={res.attributes.image.data.url}
                  alt="name"
                  className="Image"
                  loading="lazy"
                />
                <p className="Title">{res.attributes.name}</p>
              </Link>
            );
          })}
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="Collections-Wrapper">{this.renderCollections()}</div>
        <RecentStorysContainer />
        <YouTubeWidget />
      </>
    );
  }
}

export default Collections;
