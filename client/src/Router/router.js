import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import GalleryContainer from "./Gallery/Gallery.container";
import Home from "./Home/Home.component";
import HeaderContainer from "../Pages/Header/Header.container";
import FooterContainer from "../Pages/Footer/Footer.container";
import GalleryListContainer from "./GalleryList/GalleryList.container";
import AboutContainer from "../Pages/About/About.container";
import ContactUsContainer from "../Pages/ContactUs/ContactUs.container";

const LayOut = () => {
  // if (window.innerWidth <= 1200) return <Home />;

  return (
    <>
      <HeaderContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery/:list",
        element: <GalleryContainer />,
      },
      {
        path: "/galleryList/:id",
        element: <GalleryListContainer />,
      },
      {
        path: "/about",
        element: <AboutContainer />,
      },
      {
        path: "/contactUs",
        element: <ContactUsContainer />,
      },
    ],
  },
]);

export default AppRouter;
