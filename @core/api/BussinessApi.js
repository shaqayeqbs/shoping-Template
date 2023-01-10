import instance from "../utils/request.js";
import END_POINTS from "../constants/endpoints";
import axios from "axios";
import APP_CONFIG from "../constants/app-config.js";

export const bussinessByDomainApi = async () => {
  console.log("first");
  try {
    //http://core.behzi.net/api/business/byDomin/zaay.ir?lang=fa
    console.log(
      `${APP_CONFIG.apiBaseUrl}${END_POINTS.getSpecifiedBusinessBydDomain}`
    );
    const res = await axios(
      "http://core.behzi.net/api/business/byDomin/zaay.ir?lang=fa"
    );

    return res;
  } catch (err) {
    console.log({ err });
    if (err.response) {
      return err.response.data.code;
    } else {
      return `ERROR:${err}`;
    }
  }
};

export const lastpost = async ({ username }) => {
  try {
    const res = await instance.get(END_POINTS.account_last_post + username);
    return res?.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const clonePost = async ({ username }) => {
  try {
    const res = await instance.post(END_POINTS.clone_post, { username });
    return res.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const analyzeAccount = async ({ id, startDate, endDate }) => {
  try {
    const res = await instance.get(
      END_POINTS.analyze_account +
        `start_date=${startDate}&end_date=${endDate}&instagram_account=${id}`
    );
    if (res?.status === 200) {
      if (res.data.length === 1) {
        return await res.data[0];
      } else {
        return await res?.data;
      }
    } else if (res?.status === 201) {
      return { message: res.data };
    }
  } catch (err) {
    if (err.response) {
      console.log(err.response);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const analyzePostAccount = async ({ id, startDate, endDate }) => {
  try {
    const res = await instance.get(
      END_POINTS.analyze_post_account +
        `start_date=${startDate}&end_date=${endDate}&instagram_account=${id}`
    );
    return res?.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};