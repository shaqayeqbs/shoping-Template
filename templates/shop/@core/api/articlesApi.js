import END_POINTS from "../constants/endpoints";
import instance from "../utils/request.js";
import axios from "axios";
import APP_CONFIG from "../constants/app-config";

export const GetArticles = async (id) => {
  try {
    console.log(APP_CONFIG.apiBaseUrl + END_POINTS.getArticles + id);

    const res = await axios(
      APP_CONFIG.apiBaseUrl + END_POINTS.getArticles + id
    );

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
export const getBussinessGallery = async (id) => {
  try {
    const res = await axios(
      APP_CONFIG.apiBaseUrl + END_POINTS.get_bussiness_gallery + id
    );
    return res;
  } catch (err) {
    if (err.response) {
      return err.response.data.code;
    } else {
      return `ERROR:${err}`;
    }
  }
};
