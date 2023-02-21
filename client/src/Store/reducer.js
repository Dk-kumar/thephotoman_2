import { combineReducers } from "redux";
import blockReducer from "./Blocks/Blocks.reducer";
import collectionsReducer from "./Collections/Collections.reducer";
import galleryReducer from "./Gallery/Gallery.reducer";
import recentStoriesReducer from "./RecentStories/RecentStories.reducer";
import sliderReducer from "./Slider/Slider.reducer";

const Reducers = combineReducers({
  sliderReducer,
  collectionsReducer,
  recentStoriesReducer,
  blockReducer,
  galleryReducer,
});

export default Reducers;
