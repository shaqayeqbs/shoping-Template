import END_POINTS from "../constants/endpoints";
import instance from "../utils/request.js";

export const uploadCurrentUserPictureApi = async (image) => {
  console.log(image.data);
  try {
    const res = await instance.post(
      END_POINTS.upload_current_user_profile_image,
      {
        lang: "fa",
        image: image,
      }
      //    headers :{ "Content-Type": "multipart/form-data" },
    );

    return res?.data;
  } catch (err) {
    if (err?.response) {
      console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
