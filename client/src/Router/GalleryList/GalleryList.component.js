import React, { Component } from "react";
import Fancybox from "../../Pages/FancyBox/FancyBox.component";
import { mediaURL } from "../../Utils/EndPoints";
import Loader from "../../Pages/Loader/Loader.component";
import { Banner } from "../../Pages/Loader/LoaderTypes";
import "./GalleryList.style.scss";

class GalleryList extends Component {
  state = {};

  renderBaseImages() {
    // const {
    //   galleryLitsData: { galleryList },
    // } = this.props;
    const {
      galleryList: { images } = {}
   } = this.props;
console.log(this.props)
    return (
      <>
        <div className="Base-Image-Wrapper">
          {images?.map((res) => {
            return (
              <div className="Image-Container">
                <Fancybox>
                  <a
                    data-fancybox="gallery"
                    // href={`${mediaURL}${res.attributes.base_image.data.attributes.url}`}
                    href={res}
                  >
                    <img
                      className="Image"
                      // src={`${mediaURL}${res.attributes.base_image.data.attributes.url}`}
                      src={res}
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
    // const {
    //   galleryLitsData: { galleryList = [] },
    // } = this.props;

    const {
      galleryList: { images} = {}
   } = this.props;

    if (images?.length) return;

    // const [{ attributes: { image_collections: { data } = {} } = {} }] =
    //   galleryList;

    return (
      <>
        <div className="Image-Collection-Container">
          {images?.map((imageList) => {
            return (
              <div className="Image-Container">
                <Fancybox>
                  <a
                    data-fancybox="gallery"
                    // href={`${mediaURL}${imageList.attributes.url}`}
                    href={imageList}
                  >
                    <img
                      className="Image"
                      // src={`${mediaURL}${imageList.attributes.url}`}
                       href={imageList}
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
        {false ? (
          <Loader type={Banner} />
        ) : (
          <div className="GalleryList-Container">{this.renderBaseImages()}</div>
        )}
      </>
    );
  }
}

export default GalleryList;
