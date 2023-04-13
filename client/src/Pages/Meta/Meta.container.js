import React, { Component } from "react";
import Meta from "./Meta.component";
import { connect } from "react-redux";
import BlocksDispatcher from "../../Store/Blocks/Blocks.dispatcher";

const BLOCK_KEY = "meta";

export const mapStateToProps = (state) => ({
  block: state.blockReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getBlock: () => BlocksDispatcher.getBlocksList(dispatch, BLOCK_KEY),
});
class MetaContainer extends Component {
  state = {};

  componentDidMount() {
    const { getBlock } = this.props;
    getBlock();
  }

  render() {
    return <Meta />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MetaContainer);
