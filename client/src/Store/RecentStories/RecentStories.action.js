export const GET_RECENT_STORIES = "GET_RECENT_STORIES";

export const getRecentStories = (data) => ({
  type: GET_RECENT_STORIES,
  payload: data,
});
