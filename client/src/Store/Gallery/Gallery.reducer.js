import { GET_GALLERY } from "./Gallery.action";

export const initialState = {
  isLoading: false,
  galleryList: [],
};

const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GALLERY:
      return {
        ...state,
        galleryList: payload?.data,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default galleryReducer;
