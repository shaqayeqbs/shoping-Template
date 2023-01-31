import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { businessAction } from "../store/Slices/BussinessSlice";
import dynamic from "next/dynamic";

const ShopHome = dynamic(() => import("../templates/shop/pages/Home"));

function Home({ data = null }) {
  const dispatch = useDispatch();

  const { description, events } = useSelector((state) => state.businessSlice);

  useEffect(() => {
    dispatch(businessAction.fetchFirspageData(data));
  }, [description, data, dispatch]);

  return (
    <>
      <Head>
        <title>tenant</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ShopHome data={data} />
    </>
  );
}

export default memo(Home);

export const getServerSideProps = async () => {
  let response = await axios(
    "http://core.behzi.net/api/business/byDomin/zaay.ir?lang=fa"
  );

  return {
    props: {
      data: response?.data || null,
    },
  };
};
