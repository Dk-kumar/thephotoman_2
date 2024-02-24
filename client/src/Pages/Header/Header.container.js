import React, { Component } from "react";
import { connect } from "react-redux";
import BlocksDispatcher from "../../Store/Blocks/Blocks.dispatcher";
import { withRouter } from "../../Utils/WithRouter";
import Header from "./Header.component";
import MobileHeader from "./Mobile/MobileHeader.component";

const BLOCK_KEY = "header";

export const mapStateToProps = (state) => ({
  block: state.blockReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getBlock: () => BlocksDispatcher.getBlocksList(dispatch, BLOCK_KEY),
});

class HeaderContainer extends Component {
  state = {isOpenNav: true,};

  componentDidMount() {
    const { getBlock } = this.props;
    // getBlock();
  }

  findingRouter() {
    console.log(this.props)

    const {
      router: {location: { pathname }},
    } = this.props;
    if (pathname === "/") {
      return true;
    }
  }

  handleMenu() {
    const { isOpenNav } = this.state;
    const sideNav = document.getElementById("sidenav");
    isOpenNav ? (sideNav.style.width = "100%") : (sideNav.style.width = "0%");
    this.setState({
      isOpenNav: !isOpenNav,
    });
  }

  containerComponets = {
    handleMenu: () => this.handleMenu(),
    findingRouter: () => this.findingRouter()
  }

  render() {
    return (
      <>
        <Header {...this.props} {...this.state} />
        <MobileHeader {...this.props} {...this.state} {...this.containerComponets} />
      </>
    )
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
);
