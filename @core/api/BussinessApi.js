import instance from "../utils/request.js";
import END_POINTS from "../constants/endpoints";
import axios from "axios";
import APP_CONFIG from "../constants/app-config.js";

export const bussinessByDomainApi = async () => {
  try {
    const res = await axios(
      APP_CONFIG.apiBaseUrl + END_POINTS.getSpecifiedBusinessBydDomain
      // "http://core.behzi.net/api/business/byDomin/zaay.ir?lang=fa"
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

export const FQ = async (id) => {
  console.log(APP_CONFIG.apiBaseUrl + END_POINTS.get_FQ + id);
  try {
    const res = await axios(APP_CONFIG.apiBaseUrl + END_POINTS.get_FQ + id);

    return res;
  } catch (err) {
    if (err.response) {
      return err.response.data.code;
    } else {
      return `ERROR:${err}`;
    }
  }
};

export const Get_Business_Editors_By_Type = async (id, type) => {
  console.log(
    `${APP_CONFIG.apiBaseUrl}${END_POINTS.getBusinessEditors}/${id}/${type}`
  );
  try {
    const res = await axios(
      `${APP_CONFIG.apiBaseUrl}${END_POINTS.getBusinessEditors}/${id}/${type}`
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

export const getEventGallery = async (id) => {
  try {
    const res = await axios(
      APP_CONFIG.apiBaseUrl + END_POINTS.get_event_gallery + id
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
