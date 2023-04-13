import React, { Component } from "react";
import Footer from "./Footer.component";

class FooterContainer extends Component {
  state = {
    links: [
      // {
      //   id: 1,
      //   title: "Home",
      // },
      {
        id: 2,
        title: "About",
      },
      {
        id: 3,
        title: "Wedding",
      },
      {
        id: 4,
        title: "Maternity",
      },
      {
        id: 5,
        title: "Baby Shoot",
      },
      {
        id: 6,
        title: "Contact",
      },
    ],
  };
  render() {
    return <Footer {...this.state} />;
  }
}

export default FooterContainer;
