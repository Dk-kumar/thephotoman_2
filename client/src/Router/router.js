import React from "react";
import { Routes, Route } from "react-router-dom";
import GalleryContainer from "./Gallery/Gallery.container";
import Home from "./Home/Home.component";
import { withRouter } from "../Utils/WithRouter";

const AppRouter = (props) => {
  return (
    <>
      <Routes>
        <Route exact path={"/"} element={<Home {...props} />} />
        <Route exact path={"/gallery"}>
          <Route path={":list"} element={<GalleryContainer {...props} />} />
        </Route>
      </Routes>
    </>
  );
};

export default withRouter(AppRouter);
