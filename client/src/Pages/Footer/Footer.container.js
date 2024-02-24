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
        url: "/about"
      },
      {
        id: 3,
        title: "Wedding",
        url: "/gallery/wedding"
      },
      {
        id: 4,
        
        title: "Baby Shoot",
        url: "/gallery/babyShoot"
      },
      {
        id: 5,
        title: "Maternity",
        url: "/gallery/maternity"
      },
      {
        id: 6,
        title: "Outdoor",
        url: "/gallery/outdoor"
      },
      {
        id: 7,
        title: "Contact",
        url: "/contactUs",
      },
    ],
  };
  render() {
    return <Footer {...this.state} />;
  }
}

export default FooterContainer;
