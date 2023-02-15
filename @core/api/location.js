import instance from "../utils/request";
import END_POINTS from "../constants/endpoints";

export const getListOfCitys = async (cityname) => {
  try {
    const res = await instance.get(END_POINTS.get_list_of_cities + cityname);

    return res?.data?.data?.cities;
  } catch (err) {
    if (err?.response) {
      console.log(err.response.data, err.response.status, err);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
