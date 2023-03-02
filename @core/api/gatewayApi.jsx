import instance from "../utils/request";
import END_POINTS from "../constants/endpoints";

export const gateWayBanks = async (id) => {
  try {
    const res = await instance.get(END_POINTS.gate_way + id);
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
