export const GET_BLOCK = "GET_BLOCK";

export const getBlock = (data) => ({
  type: GET_BLOCK,
  payload: data,
});
