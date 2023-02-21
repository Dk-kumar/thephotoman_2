export const mediaURL = "http://localhost:1337";
export const baseURL = "http://localhost:1337/api";
export const Urls = {
  sliderEndPoint: `${baseURL}/banners?populate=bannerImage`,
  collectionEndPoint: `${baseURL}/galleries?populate=*`,
  recentStorysEndPoint: `${baseURL}/recent-storys?populate=*`,
  blocksEndPoint: `${baseURL}/blocks?filters[key][$eq]=`,
  galleryEndPoint: `${baseURL}/collections?populate=*&[filters][galleries][name]=`
};
