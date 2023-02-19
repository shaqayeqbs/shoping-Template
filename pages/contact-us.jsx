import nookies from "nookies";
import useSetBussinessData from "../@core/hooks/useSetBussinessData";
import dynamic from "next/dynamic";
import mainData from "../@core/utils/serverProps";

const ShopContact = dynamic(() =>
  import("../templates/shop/pages/ShopContact")
);

function ContactUs({ data }) {
  useSetBussinessData(data);
  if (typeof window == undefined) {
    return null;
  }
  return (
    <>
      <ShopContact />
    </>
  );
}

export default ContactUs;
export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { res } = ctx;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );
  let bussinessData = {};
  if (!cookies?.id) {
    bussinessData = await mainData(ctx);
  }
  return {
    props: {
      data: bussinessData.data || null,
    },
  };
};
