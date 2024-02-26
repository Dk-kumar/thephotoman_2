import React, { Component } from "react";
import "./InProgress.style.scss";

class InProgress extends Component {
  InProgressText() {
    return (
      <div className="Text">
        {/* <p className="Desktop-View">Enable desktop view</p> */}
        <p className="In-Progress-Text">In Progress</p>
      </div>
    );
  }

  bannerLoader() {
    return (
      <div className="Card-Wrapper">
        {this.InProgressText()}
        <div className="Content">
          <p className="Content-Loader"></p>
        </div>
      </div>
    );
  }

  collectionLoader() {
    return (
      <div className="Card-Wrapper">
        <div className="Image"></div>
        <div className="Content">
          <p className="Content-Loader"></p>
        </div>
      </div>
    );
  }

  render() {
    return <div className="InProgress-Container">{this.bannerLoader()}</div>;
  }
}

export default InProgress;
