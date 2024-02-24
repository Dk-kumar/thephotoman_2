/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Pages/Loader/Loader.component";
import { Banner } from "../../Pages/Loader/LoaderTypes";
import { mediaURL } from "../../Utils/EndPoints";
import "./Gallery.style.scss";

const CHILD_GALLERY = 1;

class Gallery extends Component {
  state = {};

  renderBaseGallery() {
    // const {
    //   gallery: { galleryList = [] },
    // } = this.props;

    const {
       galleryList = [] ,
    } = this.props;

    return galleryList?.map((galleryList, index) => {
      if (!index) {
        return (
          <>
            <div className="Base-Gallery" key={galleryList.id}>
              <Link to={`/galleryList/${galleryList.id}`} className="Gallery-Wrapper">
                <img
                  className="Image"
                  src={galleryList.attributes.base_image.data.attributes.url}
                  alt="wedding"
                  loading="lazy"
                />
                <p className="Name">{galleryList.attributes.title}</p>
              </Link>
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
    // const {
    //   gallery: { galleryList = [] },
    // } = this.props;
    const {
      galleryList = [] ,
   } = this.props;

    return (
      <>
        <div className="Child-Gallery">
          {galleryList.slice(CHILD_GALLERY).map((galleryList) => {
            return (
              <Link
                className="Gallery-Wrapper"
                to={`/galleryList/${galleryList.id}`}
                key={galleryList.id}
              >
                <img
                  className="Image"
                  src={galleryList.attributes.base_image.data.attributes.url}
                  alt="wedding"
                  loading="lazy"
                />
                <p className="Name">{galleryList.attributes.title}</p>
              </Link>
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
    const {
      gallery: { isLoading },
    } = this.props;

    return (
      <>
        {false ? (
          <Loader type={Banner} />
        ) : (
          <>
            <div className="Gallery-Container">
              {this.renderBaseGallery()}
              {this.renderGalleryChild()}
            </div>
          </>
        )}
      </>
    );
  }
}

export default Gallery;
