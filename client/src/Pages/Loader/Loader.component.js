import React, { Component } from "react";
import "./Loader.style.scss";
import { Banner } from "./LoaderTypes";

class Loader extends Component {
  loaderTypes = {
    [Banner]: {
      render: () => this.bannerLoader(),
    },
  };

  bannerLoader() {
    return (
      <div className="Card-Wrapper">
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
    const { type } = this.props;
    const { render } = this.loaderTypes[type];
    return <>{render()}</>;
  }
}

export default Loader;
