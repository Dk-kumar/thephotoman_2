import React, { Component } from "react";
import Fancybox from "../../Pages/FancyBox/FancyBox.component";
import { mediaURL } from "../../Utils/EndPoints";
import Loader from "../../Pages/Loader/Loader.component";
import { Banner } from "../../Pages/Loader/LoaderTypes";
import "./GalleryList.style.scss";

class GalleryList extends Component {
  state = {};

  renderBaseImages() {
    const {
      galleryLitsData: { galleryList },
    } = this.props;

    return (
      <>
        <div className="Base-Image-Wrapper">
          {galleryList.map((res) => {
            return (
              <div className="Image-Container">
                <Fancybox>
                  <a
                    data-fancybox="gallery"
                    href={`${mediaURL}${res.attributes.base_image.data.attributes.url}`}
                  >
                    <img
                      className="Image"
                      src={`${mediaURL}${res.attributes.base_image.data.attributes.url}`}
                      alt="wedding"
                    />
                  </a>
                </Fancybox>
              </div>
            );
          })}
        </div>
        {this.renderCollectionImages()}
      </>
    );
  }

  renderCollectionImages() {
    const {
      galleryLitsData: { galleryList = [] },
    } = this.props;

    if (galleryList.length === 0) return;

    const [{ attributes: { image_collections: { data } = {} } = {} }] =
      galleryList;

    return (
      <>
        <div className="Image-Collection-Container">
          {data?.map((imageList) => {
            return (
              <div className="Image-Container">
                <Fancybox>
                  <a
                    data-fancybox="gallery"
                    href={`${mediaURL}${imageList.attributes.url}`}
                  >
                    <img
                      className="Image"
                      src={`${mediaURL}${imageList.attributes.url}`}
                      alt="wedding"
                    />
                  </a>
                </Fancybox>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  render() {
    const {
      galleryLitsData: { isLoading },
    } = this.props;
    return (
      <>
        {!isLoading ? (
          <Loader type={Banner} />
        ) : (
          <div className="GalleryList-Container">{this.renderBaseImages()}</div>
        )}
      </>
    );
  }
}

export default GalleryList;
