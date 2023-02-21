const token =
  "bearer e4e73b0ec0fbb2e4177a6de56e75d2e2357336a1e04a5b21348728566a7275a35997feecbbbbe5d4e525e145efac1b033a8ecc1a8948ff30e9c5d3793d15e4f25e43050f929c0fb1d4b83ae96b976477b94f36567b80294f0bb3a242f8b118082a0ad7d48d25279c4cd11d07d5a775fafda313bd613d7fb83dbfc2f1eeaf29ec";

export const getRequest = async (endPoint, dispatch, getCollections) => {
  let responce = await fetch(endPoint, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  let json = await responce.json();
  await dispatch(getCollections(json));
};
