const token =
  "bearer e5ece038dfc7ae4fa7fefde8076165a5bb7f65ffa52c84798201f693e3a342cfdb559dd621cb405e2f08b61aee9a51354e861011ec05160b065d7ba22c1011f82dc3ef93cf78b6056a563c158e47f6b1a96326c87985f8cfb78737ee0de213ea51e9521b454377fb1deb69ea13543f3c4412881f073cb08c154739270ca2865d";

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
