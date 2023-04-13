import { Urls } from "../../Utils/EndPoints";
import { getRequest } from "../../Utils/FetchRequest";
import { getGallerys } from "./Gallery.action";

// const Query = `[galleries][name]=`;

class GalleryDispatcher {
  getGallerysList(dispatch, Query, filterKey) {
    return getRequest(
      `${Urls.galleryEndPoint}${Query}${filterKey}`,
      dispatch,
      getGallerys
    );
  }
}

export default new GalleryDispatcher();
