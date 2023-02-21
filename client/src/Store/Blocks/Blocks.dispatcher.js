import { Urls } from "../../Utils/EndPoints";
import { getRequest } from "../../Utils/FetchRequest";
import { getBlock } from "./Blocks.action";

class BlocksDispatcher {
  getBlocksList(dispatch, filterQuery) {
    return getRequest(
      `${Urls.blocksEndPoint}${filterQuery}`,
      dispatch,
      getBlock
    );
  }
}

export default new BlocksDispatcher();
