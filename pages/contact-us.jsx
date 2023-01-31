import nookies from "nookies";
import useSetBussinessData from "../@core/hooks/useSetBussinessData";
import dynamic from "next/dynamic";

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
