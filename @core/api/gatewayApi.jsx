import instance from "../utils/request";
import END_POINTS, { USER_ADDRESS_END_POINTS } from "../constants/endpoints";

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

export const setBusnessGateWayTospecifiedOrderAPi = async ({
  id,
  lang = "en",
  getway_id,
}) => {
  try {
    const res = await instance.post(
      USER_ADDRESS_END_POINTS.set_user_address_to_specified_order +
        id +
        "/set-getway",
      {
        getway_id,
        lang,
        id,
      }
    );

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
