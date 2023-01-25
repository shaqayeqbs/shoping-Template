import END_POINTS from "../constants/endpoints";
import instance from "../utils/request.js";

export const GetArticles = async () => {
  try {
    const res = await instance.post(END_POINTS.getArticles);

    return res;
  } catch (err) {
    if (err?.response) {
      // console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
