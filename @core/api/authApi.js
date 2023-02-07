import END_POINTS from "../constants/endpoints";
import instance from "../utils/request.js";

export const register = async ({ phone, password }) => {
  try {
    const res = await instance.post(END_POINTS.register, { phone, password });
    // if (res?.status === 200) {
    //   localStorage.setItem("token", res.data.access);
    // }

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
export const getCurrentUser = async () => {
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

export const verifyCode = async ({ phone, code }) => {
  const mobile = phone;
  const lang = "fa";
  try {
    console.log({ phone, code });
    const res = await instance.post(END_POINTS.verfy_code, {
      mobile,
      code,
      lang,
    });
    console.log({ res });
    if (res?.status === 200) {
      localStorage.setItem("token", res.data?.token);
    }

    return res;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      return { message: err.response.data };
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};

export const verifyPhone = async ({ phone }) => {
  try {
    const mobile = phone;
    const res = await instance.post(END_POINTS.verfy_phone, {
      mobile,
      lang: "fa",
    });
    console.log(res);
    return res?.status;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data, err.response.status);
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
