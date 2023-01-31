import axios from "axios";
import nookies from "nookies";
import END_POINTS from "../constants/endpoints";
import APP_CONFIG from "../constants/app-config";
export default async function mainData(ctx) {
  const { req, query, res, asPath, pathname } = ctx;
  let url = req.headers.host;
  if (
    url === "localhost:3000" ||
    url === "localhost:3001" ||
    url === "localhost:3002"
  ) {
    url = "zaay.ir";
  }

  let response = await axios(
    // "http://core.behzi.net/api/business/byDomin/zaay.ir?lang=fa"
    `http://core.behzi.net/api/business/byDomin/${url}?lang=fa`
  );

  const cookies = nookies.get(ctx);
  if (cookies) {
    const id = response?.data.data.domin.business.id;
    nookies.set(ctx, "id", id);
  }
  return response || null;
}
