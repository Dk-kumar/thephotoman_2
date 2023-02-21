import React, { Component } from "react";
import { connect } from "react-redux";
import SliderDispatcher from "../../Store/Slider/Slider.dispatcher";
import BannerSlider from "./BannerSlider.component";

export const mapStateToProps = (state) => ({
  slider: state.sliderReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getCollections: () => SliderDispatcher.getCollections(dispatch),
});

class BannerSliderContainer extends Component {
  componentDidMount() {
    const { getCollections } = this.props;
    getCollections();
  }

  render() {
    return (
      <>
        <BannerSlider {...this.props} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerSliderContainer);
