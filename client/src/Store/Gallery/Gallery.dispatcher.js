import { Urls } from "../../Utils/EndPoints";
import { getRequest } from "../../Utils/FetchRequest";
import { getGallerys } from "./Gallery.action";

class GalleryDispatcher {
  getGallerysList(dispatch, filterKey) {
    return getRequest(`${Urls.galleryEndPoint}${filterKey}`, dispatch, getGallerys);
  }
}

export default new GalleryDispatcher();
