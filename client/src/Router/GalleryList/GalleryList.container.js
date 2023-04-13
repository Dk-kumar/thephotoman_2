import React, { Component } from "react";
import { connect } from "react-redux";
import GalleryDispatcher from "../../Store/Gallery/Gallery.dispatcher";
import { withRouter } from "../../Utils/WithRouter";
import GalleryList from "./GalleryList.component";

const Query = `[id]=`;

export const mapStateToProps = (state) => ({
  galleryLitsData: state.galleryReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getGalleryList: (filterKey) =>
    GalleryDispatcher.getGallerysList(dispatch, Query, filterKey),
});

class GalleryListContainer extends Component {
  state = {};

  componentDidMount() {
    this.getGalleryListCollection();
  }

  componentDidUpdate(prevProps) {
    const {
      router: { params = "" },
    } = this.props;

    if (prevProps.router.params !== params) {
      this.getGalleryListCollection();
    }
  }

  getGalleryListCollection() {
    const {
      getGalleryList,
      router: { location: { pathname = "" } = {} },
    } = this.props;

    const filterKey = pathname?.slice(pathname.lastIndexOf("/") + 1);
    getGalleryList(filterKey);
  }
  render() {
    return <GalleryList {...this.props} />;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GalleryListContainer)
);
