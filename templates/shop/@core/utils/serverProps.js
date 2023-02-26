import axios from "axios";
import nookies from "nookies";
import END_POINTS from "../../../../@core/constants/endpoints";
import APP_CONFIG from "../../../../@core/constants/app-config";
export default async function mainData(ctx) {
  const { req, query, res, asPath, pathname } = ctx;
  let url = req.headers.host;
  if (
    url === "localhost:3000" ||
    url === "localhost:3001" ||
    url === "localhost:3002"
  ) {
    url = "tivarja.ir/";
  }

  let response = await axios(
    `http://core.behzi.net/api/business/byDomin/${url}?lang=fa`
  ).catch(function (error) {
    if (error.response) {
      return { notFound: true };

      // return {
      //   redirect: {
      //     permanent: false,
      //     destination: "/404",
      //   },
      // };
    }
  });

  const cookies = nookies.get(ctx);
  if (cookies) {
    const id = response?.data.data.domin.business.id;
    nookies.set(ctx, "id", id);
  }
  return response || null;
}
