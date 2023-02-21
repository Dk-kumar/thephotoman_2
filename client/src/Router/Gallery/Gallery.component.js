/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { mediaURL } from "../../Utils/EndPoints";
import "./Gallery.style.scss";

const CHILD_GALLERY = 1;

class Gallery extends Component {
  state = {};

  renderBaseGallery() {
    const {
      gallery: { galleryList = [] },
    } = this.props;

    return galleryList?.map((galleryList, index) => {
      if (!index) {
        return (
          <>
            <div className="Base-Gallery" key={galleryList.id}>
              <div className="Gallery-Wrapper">
                <img
                  className="Image"
                  src={`${mediaURL}${galleryList.attributes.base_image.data.attributes.url}`}
                  alt="wedding"
                  loading="lazy"
                />
                <p className="Name">{galleryList.attributes.title}</p>
              </div>
              <div>
                {this.renderDescription(galleryList.attributes.description)}
              </div>
            </div>
            <div className="Line-Wtapper">
              <div className="Line"></div>
              <span className="Cross">X</span>
              <div className="Line"></div>
            </div>
          </>
        );
      }
    });
  }

  renderGalleryChild() {
    const {
      gallery: { galleryList = [] },
    } = this.props;

    return (
      <>
        <div className="Child-Gallery" key={galleryList.id}>
          {galleryList.slice(CHILD_GALLERY).map((galleryList) => {
            return (
              <div className="Gallery-Wrapper">
                <img
                  className="Image"
                  src={`${mediaURL}${galleryList.attributes.base_image.data.attributes.url}`}
                  alt="wedding"
                  loading="lazy"
                />
                <p className="Name">{galleryList.attributes.title}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  renderDescription(description) {
    const { router: { location: { pathname = "" } = {} } = {} } = this.props;
    const galleryName = pathname?.slice(pathname.lastIndexOf("/") + 1);

    return (
      <div className="Description-Container">
        <p className="Title">{galleryName}</p>
        <p className="Description">{description}</p>
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="Gallery-Container">
        {this.renderBaseGallery()}
        {this.renderGalleryChild()}
      </div>
    );
  }
}

export default Gallery;
