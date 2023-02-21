import React, { Component } from "react";
import { mediaURL } from "../../Utils/EndPoints";

import "./RecentStorys.style.scss";

class RecentStorys extends Component {
  renderHeading() {
    return (
      <div className="Heading-Wrapper">
        <p className="Heading">Recent Stories</p>
      </div>
    );
  }

  renderStories() {
    const { stories: { storiesList = [] } = {} } = this.props;
    return (
      <>
        {this.renderHeading()}
        <div className="Card-Container">
          {storiesList.map((res) => {
            return (
              <div className="Story-Card" key={res.id}>
                <img
                  src={`${mediaURL}${res.attributes.base_image.data.attributes.url}`}
                  alt="name"
                  className="Image"
                  loading="lazy"
                />
                <div className="Contend-Wrapper">
                  <p className="Title">{res.attributes.title}</p>
                  <p className="Location">{res.attributes.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="Recent-Storise-Container">{this.renderStories()}</div>
      </>
    );
  }
}

export default RecentStorys;
