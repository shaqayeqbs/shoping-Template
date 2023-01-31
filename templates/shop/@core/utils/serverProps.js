import axios from "axios";
import nookies from "nookies";
export default async function mainData(ctx) {
  let response = await axios(
    "http://core.behzi.net/api/business/byDomin/zaay.ir?lang=fa"
  );

  const cookies = nookies.get(ctx);
  if (cookies) {
    const id = response?.data.data.domin.business.id;
    nookies.set(ctx, "id", id);
  }
  return response || null;
}
