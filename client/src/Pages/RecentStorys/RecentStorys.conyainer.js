import React, { Component } from "react";
import { connect } from "react-redux";
import RecentStorys from "./RecentStorys.component";
import RecentStoriesDispatcher from "../../Store/RecentStories/RecentStories.dispatcher";

export const mapStateToProps = (state) => ({
  stories: state.recentStoriesReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getStoriesList: () => RecentStoriesDispatcher.getStoriesList(dispatch),
});
class RecentStorysContainer extends Component {
  componentDidMount() {
    const { getStoriesList } = this.props;
    getStoriesList();
  }
  render() {
    return <RecentStorys { ...this.props } />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentStorysContainer);
