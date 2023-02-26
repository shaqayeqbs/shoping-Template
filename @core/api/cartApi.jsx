import instance from "../utils/request";
import END_POINTS from "../constants/endpoints";
import { CART_END_POINTS } from "../constants/endpoints";

export const getListOfOrderApi = async (id) => {
  try {
    const accessToken = localStorage.getItem("token");
    console.log(CART_END_POINTS.get_list_of_order + id, "llllllllllllll");
    let res = null;
    if (accessToken) {
      res = await instance.get(CART_END_POINTS.get_list_of_order + id);
    }
    return res;
  } catch (err) {
    if (err?.response) {
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
export const storeNewProductOrderApi = async (inventory_id) => {
  try {
    const res = await instance.post(CART_END_POINTS.store_a_new_product, {
      lang: "en",
      inventory_id,
    });

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

export const deleteProductOrderApi = async (inventory_id) => {
  try {
    const res = await instance.post(CART_END_POINTS.delete_product, {
      lang: "en",
      inventory_id,
    });
    console.log(res);
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

export const deleteAllProductOrderApi = async (inventory_id) => {
  try {
    const res = await instance.post(CART_END_POINTS.delete_all_products, {
      lang: "en",
      inventory_id,
    });
    console.log(res);
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
