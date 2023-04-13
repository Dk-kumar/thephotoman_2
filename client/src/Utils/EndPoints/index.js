export const mediaURL = "http://www.apiphotoman.thephotoman.in";
export const baseURL = "http://www.apiphotoman.thephotoman.in/api";
export const Urls = {
  sliderEndPoint: `${baseURL}/banners?populate=bannerImage`,
  collectionEndPoint: `${baseURL}/galleries?populate=*`,
  recentStorysEndPoint: `${baseURL}/recent-storys?populate=*`,
  blocksEndPoint: `${baseURL}/blocks?populate=*&filters[key][$eq]=`,
  galleryEndPoint: `${baseURL}/collections?populate=*&[filters]`
};
