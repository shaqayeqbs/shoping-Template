import axios from "axios";
import APP_CONFIG from "../constants/app-config";
// import logout from "../../components/Hepler/logout";

export function getLocalAccessToken() {
  const accessToken = localStorage.getItem("token");
  return accessToken;
}

const instance = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
});

instance.interceptors.request.use(
  (config) => {
    if (typeof window != "undefined") {
      const token = getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      console.log(token, "hereeeeeeeeee");
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (res) => {
//     console.log({ res });
//     return res;
//   },
//   async (err) => {
//     try {
//       // console.clear();
//       // const token = getLocalAccessToken();
//       // if (err.code === "ERR_NETWORK" || err.code === "ECONNABORTED") {
//       //   return err.code;
//       // }

//       if (err.response.status === 404) {
//         console.log("checked user Auth", err.response.status);
//         console.log("hooooooooooooooooooooooooooooo");
//         if (!window.location.href.includes("NoTFound")) {
//           window.location.href = "NoTFound";
//           return;
//         }
//       }
//       return;
//     } catch (_error) {
//       // return Promise.reject(_error);
//     }

//     // if (err.response.status === 403 && err.response.data) {
//     //   return Promise.reject(err.response.data);
//     // }
//     // return Promise.reject(err);
//   }
// );

export default instance;
