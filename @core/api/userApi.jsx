import END_POINTS from "../constants/endpoints";
import instance from "../utils/request.js";
import APP_CONFIG from "../constants/app-config";
import axios from "axios";
export const uploadCurrentUserPictureApi = async (imaged) => {
  console.log("haya");
  console.log(typeof imaged);
  const accessToken = localStorage.getItem("token");
  // try {
  const data = new FormData();
  data.append("lang", "fa");
  data.append("image", imaged);

  console.log(`data:`, data.entries());

  // const res = await instance.post(
  //   END_POINTS.upload_current_user_profile_image,
  //   data
  // );
  const res = axios({
    method: "post",
    url: APP_CONFIG.apiBaseUrl + END_POINTS.upload_current_user_profile_image,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(res);
  // return res?.data;
  // } catch (err) {
  //   if (err?.response) {
  //     console.log(err.response.data, err.response.status, err);
  //     return err.response.data;
  //   } else {
  //     console.log(`ERROR:${err}`);
  //   }
  // }
};
