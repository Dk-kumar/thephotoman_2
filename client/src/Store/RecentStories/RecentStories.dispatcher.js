import { Urls } from "../../Utils/EndPoints";
import { getRequest } from "../../Utils/FetchRequest";
import { getRecentStories } from "./RecentStories.action";

class RecentStoriesDispatcher {
  getStoriesList(dispatch) {
    return getRequest(`${Urls.recentStorysEndPoint}`, dispatch, getRecentStories);
  }
}

export default new RecentStoriesDispatcher();
