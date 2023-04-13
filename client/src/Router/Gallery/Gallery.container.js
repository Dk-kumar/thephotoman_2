import React, { Component } from "react";
import { connect } from "react-redux";
import Gallery from "./Gallery.component";
import GalleryDispatcher from "../../Store/Gallery/Gallery.dispatcher";
import { withRouter } from "../../Utils/WithRouter";

const Query = `[galleries][name]=`;

export const mapStateToProps = (state) => ({
  gallery: state.galleryReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getGallerys: (filterKey) =>
    GalleryDispatcher.getGallerysList(dispatch, Query, filterKey),
});

class GalleryContainer extends Component {
  state = {};

  componentDidMount() {
    this.getGallerysCollection();
  }

  componentDidUpdate(prevProps) {
    const {
      router: { params = "" },
    } = this.props;

    if (prevProps.router.params !== params) {
      this.getGallerysCollection();
    }
  }

  getGallerysCollection() {
    const {
      getGallerys,
      router: { location: { pathname = "" } = {} },
    } = this.props;
    const filterKey = pathname?.slice(pathname.lastIndexOf("/") + 1);

    getGallerys(filterKey);
  }

  render() {
    return <Gallery {...this.props} />;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GalleryContainer)
);
