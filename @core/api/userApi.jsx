import END_POINTS from "../constants/endpoints";
import instance from "../utils/request.js";
import APP_CONFIG from "../constants/app-config";
import axios from "axios";
export const uploadCurrentUserPictureApi = async (imaged) => {
  console.log(typeof imaged);
  const accessToken = localStorage.getItem("token");
  const data = new FormData();
  data.append("lang", "fa");
  data.append("image", imaged);

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
  return res;
};
export const updateUserProfile = async ({
  birthday,
  surname,
  name,
  city_id,
  gender,
  lang = "fa",
}) => {
  try {
    console.log(birthday, surname, name, city_id, gender, (lang = "fa"));
    const res = await instance.post(END_POINTS.upload_current_user_profile, {
      birthday,
      surname,
      name,
      city_id,
      gender,
      lang,
    });
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err.status);
    if (err.response) {
      return err.response.status;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
