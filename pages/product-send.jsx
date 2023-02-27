// import dynamic from "next/dynamic";
import axios from "axios";
import nookies from "nookies";
import { Get_Business_Editors_By_Type } from "../@core/api/BussinessApi";

import ShopProductSend from "../templates/shop/pages/ShopProductSend";
function ProductSend({ productSend }) {
  return (
    <>
      <ShopProductSend data={productSend} />
    </>
  );
}

export default ProductSend;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { res, req } = ctx;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );

  let url = req.headers.host;
  if (
    url === "localhost:3000" ||
    url === "localhost:3001" ||
    url === "localhost:3002"
  ) {
    url = "tivarja.ir";
  }

  let id = cookies?.id
  console.log(cookies, cookies.id);

  if (!cookies || !cookies.id) {
    const response = await axios(
      `http://core.behzi.net/api/business/byDomin/${url}?lang=fa`
    ).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return { notFound: true };
      }
    });
    id = response.data.data.domin.business.id
    console.log(response.data.data.domin.business.id);
  }



  let result = await Get_Business_Editors_By_Type(id, 'productSend');
  return {
    props: {
      productSend: result?.data?.data || null,
    },
  };
};
