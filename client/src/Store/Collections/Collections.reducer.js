import { GET_COLLECTIONS } from "./Collections.action";

export const initialState = {
  isLoading: false,
  collectionList: [],
};

const collectionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collectionList: payload?.data,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default collectionsReducer;
