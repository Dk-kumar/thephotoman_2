import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mediaURL } from "../../Utils/EndPoints";
import "./RecentStorys.style.scss";
import { recentStoriesData } from "../../mock/recentStories";

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
          {recentStoriesData.map((res) => {
            return (
              <Link to={`/galleryList/${res.id}`} className="Story-Card" key={res.id}>
                <img
                  src={res.attributes.base_image.data.url}
                  alt="name"
                  className="Image"
                  loading="lazy"
                />
                <div className="Contend-Wrapper">
                  <p className="Title">{res.attributes.title}</p>
                  <p className="Location">{res.attributes.location}</p>
                </div>
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
        <div className="Recent-Storise-Container">{this.renderStories()}</div>
      </>
    );
  }
}

export default RecentStorys;
