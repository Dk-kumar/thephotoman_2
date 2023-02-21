import React, { Component } from "react";
import { connect } from "react-redux";
import Gallery from "./Gallery.component";
import GalleryDispatcher from "../../Store/Gallery/Gallery.dispatcher";

export const mapStateToProps = (state) => ({
  gallery: state.galleryReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getGallerys: (filterKey) =>
    GalleryDispatcher.getGallerysList(dispatch, filterKey),
});

class GalleryContainer extends Component {
  state = {};

  componentDidMount() {
    const { getGallerys, router: { location: { pathname = "" } = {} } = {} } =
      this.props;
    const filterKey = pathname?.slice(pathname.lastIndexOf("/") + 1);

    getGallerys(filterKey);
  }

  render() {
    return <Gallery {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
