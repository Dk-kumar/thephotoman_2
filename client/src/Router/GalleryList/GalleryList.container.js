import React, { Component } from "react";
import { connect } from "react-redux";
import GalleryDispatcher from "../../Store/Gallery/Gallery.dispatcher";
import { withRouter } from "../../Utils/WithRouter";
import GalleryList from "./GalleryList.component";
import { galleryListData } from "../../mock/galleryList";

const Query = `[id]=`;

export const mapStateToProps = (state) => ({
  galleryLitsData: state.galleryReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getGalleryList: (filterKey) =>
    GalleryDispatcher.getGallerysList(dispatch, Query, filterKey),
});

class GalleryListContainer extends Component {
  state = {
    galleryList: {}
  };

  componentDidMount() {
    this.getGalleryListCollection();
    window.scrollTo(0, 0);
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
    const filterData = galleryListData[filterKey]
    this.setState({
      galleryList: filterData
    })
    // getGalleryList(filterKey);
  }
  render() {
    return <GalleryList {...this.props} {...this.state} />;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GalleryListContainer)
);
