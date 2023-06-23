export const mediaURL = 'http://localhost:1338'
export const baseURL = 'http://localhost:1338/api'

export const Urls = {
  sliderEndPoint: `${baseURL}/banners?populate=bannerImage`,
  collectionEndPoint: `${baseURL}/galleries?populate=*`,
  recentStorysEndPoint: `${baseURL}/recent-storys?populate=*`,
  blocksEndPoint: `${baseURL}/blocks?populate=*&filters[key][$eq]=`,
  galleryEndPoint: `${baseURL}/collections?populate=*&[filters]`
};
