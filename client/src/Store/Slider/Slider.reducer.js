import { GET_SLIDERLIST } from "./Slider.action";

const initialState = {
  sliderImage: [],
  isLoading: false
};

const sliderReducer = (state = initialState, { type, payload }) => {
 
  switch (type) {
    case GET_SLIDERLIST:
      return {
        ...state,
        sliderImage: payload.data[0].attributes.bannerImage,
        isLoading: true
      };

    default:
      return state;
  }
};

export default sliderReducer;