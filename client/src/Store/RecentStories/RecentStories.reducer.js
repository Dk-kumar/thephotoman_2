import { GET_RECENT_STORIES } from "./RecentStories.action";

export const initialState = {
  isLoading: false,
  storiesList: [],
};

const recentStoriesReducer = (sate = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECENT_STORIES:
      return {
        ...sate,
        storiesList: payload?.data,
        isLoading: true,
      };
    default:
      return sate;
  }
};

export default recentStoriesReducer;
