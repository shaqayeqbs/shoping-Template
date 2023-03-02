import instance from "../utils/request";
import END_POINTS from "../constants/endpoints";

export const gateWayBanks = async () => {
  try {
    const res = await instance.get(END_POINTS.get_current_user);
    console.log(res);

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
