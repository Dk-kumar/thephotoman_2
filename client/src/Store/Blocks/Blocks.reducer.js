import { GET_BLOCK } from "./Blocks.action";

export const initialState = {
  isLoading: false,
  blockList: [],
};

const blockReducer = (sate = initialState, { type, payload }) => {
  switch (type) {
    case GET_BLOCK:
      return {
        ...sate,
        blockList: payload?.data,
        isLoading: true,
      };
    default:
      return sate;
  }
};

export default blockReducer;
