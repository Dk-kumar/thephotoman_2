import React, { Component } from "react";
import { connect } from "react-redux";
import Gallery from "./Gallery.component";
import GalleryDispatcher from "../../Store/Gallery/Gallery.dispatcher";
import { withRouter } from "../../Utils/WithRouter";
import { weddingGalleryData } from "../../mock/gallery/weddingGallery";
import { babyShootGalleryData } from "../../mock/gallery/babyShootGallery";
import { maternityGalleryData } from "../../mock/gallery/maternityGallery";
import { outdoorGalleryData } from "../../mock/gallery/outdoorGallery";


const Query = `[galleries][name]=`;

export const mapStateToProps = (state) => ({
  gallery: state.galleryReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getGallerys: (filterKey) =>
    GalleryDispatcher.getGallerysList(dispatch, Query, filterKey),
});

class GalleryContainer extends Component {
  state = {
    galleryList: []
  };

  componentDidMount() {
    this.getGallerysCollection();
    window.scrollTo(0, 0);
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

    const galleryObject = {
      'wedding': weddingGalleryData,
      'babyshoot': babyShootGalleryData,
      'motherhood': maternityGalleryData,
      'outdoor': outdoorGalleryData
    }
    
    const filterData = galleryObject[filterKey.toLowerCase()]
    console.log(filterData)
    this.setState({
      galleryList: filterData
    })
    // getGallerys(filterKey);
  }

  render() {
    return <Gallery {...this.props} {...this.state} />;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GalleryContainer)
);
