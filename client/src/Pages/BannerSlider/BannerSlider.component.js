import React, { Component } from "react";
import Slider from "react-slick";
import { mediaURL } from "../../Utils/EndPoints";
import CollectionsContainer from "../Collections/Collections.container";
import Loader from "../Loader/Loader.component";
import { Banner } from "../Loader/LoaderTypes";
import "./BannerSlider.style.scss";

class BannerSlider extends Component {
  renderSlider() {
    const {
      slider: {
        sliderImage: { data },
      },
    } = this.props;

    return (
      <div id="react-slick">
        <Slider
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
          fade={true}
          infinite={true}
        >
          {data.map(({ id, attributes: { name, url: imgURL } }) => {
            return (
              <img
                className="banner-slider"
                key={id}
                src={`${mediaURL}${imgURL}`}
                alt={name}
                loading="lazy"
              />
            );
          })}
        </Slider>
      </div>
    );
  }

  render() {
    const {
      slider: { isLoading },
    } = this.props;

    return (
      <>
        {!isLoading ? (
          <Loader type={Banner} />
        ) : (
          <>
            <div className="BannerSlider-Wrapper">
              <div className="BannerSlider-Container">
                {this.renderSlider()}
              </div>
            </div>
            <CollectionsContainer />
          </>
        )}
      </>
    );
  }
}

export default BannerSlider;
