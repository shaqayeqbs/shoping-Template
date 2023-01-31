import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { businessAction } from "../store/Slices/BussinessSlice";
import dynamic from "next/dynamic";
import END_POINTS from "../@core/constants/endpoints";
import APP_CONFIG from "../@core/constants/app-config";

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

export const getServerSideProps = async (ctx) => {
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

  return {
    props: {
      data: response?.data || null,
    },
  };
};
