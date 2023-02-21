import React, { Component } from "react";
import BannerSliderContainer from "../../Pages/BannerSlider/BannerSlider.container";
import HeaderContainer from "../../Pages/Header/Header.container";
import "./Home.style.scss"
class Home extends Component {
  renderBannerSlider() {
    return <BannerSliderContainer />;
  }

  render() {
    return (
      <div className="Home-Container">
        <div className="Header-Wrapper">
          <HeaderContainer />
        </div>
        <div className="Banner-Wrapper">{this.renderBannerSlider()}</div>
      </div>
    );
  }
}

export default Home;
