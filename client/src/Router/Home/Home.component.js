import React, { Component } from "react";
import BannerSliderContainer from "../../Pages/BannerSlider/BannerSlider.container";
import "./Home.style.scss";
import InProgress from "../../Pages/InProgress/InProgress.component";
class Home extends Component {
  renderBannerSlider() {
    return <BannerSliderContainer />;
  }

  render() {
    return (
      <>
      <div className="Mobile-View">
        <InProgress />
      </div>
        <div className="Home-Container">
          <div className="Banner-Wrapper">{this.renderBannerSlider()}</div>
        </div>
      </>
    );
  }
}

export default Home;
