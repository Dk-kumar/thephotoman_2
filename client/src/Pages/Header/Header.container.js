import React, { Component } from "react";
import { connect } from "react-redux";
import BlocksDispatcher from "../../Store/Blocks/Blocks.dispatcher";
import Header from "./Header.component";

const BLOCK_KEY = "header";

export const mapStateToProps = (state) => ({
  block: state.blockReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getBlock: () => BlocksDispatcher.getBlocksList(dispatch, BLOCK_KEY),
});

class HeaderContainer extends Component {
  state = {};

    componentDidMount() {
      const { getBlock } = this.props;
      getBlock();
    }

  render() {
    return <Header {...this.props}/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
