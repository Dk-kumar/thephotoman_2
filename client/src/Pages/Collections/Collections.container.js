import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionsDispatcher from "../../Store/Collections/Collections.dispatcher";
import Collections from "./Collections.component";

export const mapStateToProps = (state) => ({
  collections: state.collectionsReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getCollections: () => CollectionsDispatcher.getCollectionsList(dispatch),
});

class CollectionsContainer extends Component {
  componentDidMount() {
    const { getCollections } = this.props;
    getCollections();
  }

  render() {
    return <Collections {...this.props}/>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsContainer);
