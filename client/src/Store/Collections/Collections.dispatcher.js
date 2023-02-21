import { Urls } from "../../Utils/EndPoints";
import { getRequest } from "../../Utils/FetchRequest";
import { getCollections } from "./Collections.action";

class CollectionsDispatcher {
  getCollectionsList(dispatch) {
    return getRequest(`${Urls.collectionEndPoint}`, dispatch, getCollections);
  }
}

export default new CollectionsDispatcher();
