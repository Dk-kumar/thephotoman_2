import { Urls } from "../../Utils/EndPoints";
import { getRequest } from "../../Utils/FetchRequest";
import { getSlider } from "./Slider.action";

class SliderDispatcher {
  getCollections(dispatch) {
    return getRequest(`${Urls.sliderEndPoint}`, dispatch, getSlider);
  }
}

export default new SliderDispatcher();
