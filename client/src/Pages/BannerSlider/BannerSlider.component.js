import React, { Component } from "react";
import Slider from "react-slick";
import { mediaURL } from "../../Utils/EndPoints";
import CollectionsContainer from "../Collections/Collections.container";
import Loader from "../Loader/Loader.component";
import { Banner } from "../Loader/LoaderTypes";
import "./BannerSlider.style.scss";
import { bannerData } from "../../mock/banner";
import { mobileBannerData } from "../../mock/banner/mobileBanner";

class BannerSlider extends Component {
  renderSlider() {
    const {
      slider: {
        sliderImage: { data },
      },
    } = this.props;

    const bannerSliderData = window.innerWidth <= 768 ? mobileBannerData :  bannerData

    return (
      <div id="react-slick">
        <Slider
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
          fade={true}
          infinite={true}
        >
          {bannerSliderData?.data.map(({ id, url: imgURL }) => {
            return (
              <img
                className="banner-slider"
                key={id}
                src={imgURL}
                alt={'bannerImage'}
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
      //once api is ready need change false here
      <>
        {false ? (
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
