import instance from "../utils/request";
import END_POINTS from "../constants/endpoints";
import axios from "axios";
import APP_CONFIG from "../constants/app-config";
export const getListOfProducts = async (businessId) => {
  try {
    const res = await instance.get(
      END_POINTS.get_list_of_products + businessId
    );
    console.log({ res });
    return res;
  } catch (err) {
    if (err?.response) {
      console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const getSpecifiedProducts = async (productId) => {
  try {
    const res = await axios.get(
      APP_CONFIG.apiBaseUrl +
        END_POINTS.get_specified_products +
        productId +
        "?lang=fa"
    );
    console.log({ res });
    return res;
  } catch (err) {
    if (err?.response) {
      console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
