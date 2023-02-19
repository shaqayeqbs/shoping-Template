import axios from "axios";
import { useState } from "react";
// import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { businessAction } from "../store/Slices/BussinessSlice";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../@core/UI/LoadingSpinner";
const ShopHome = dynamic(() => import("../templates/shop/pages/Home"));

function Home({ data = null }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const { description } = useSelector((state) => state.businessSlice);

  useEffect(() => {
    dispatch(businessAction.fetchFirspageData(data));
  }, [description, data, dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>tenant</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ShopHome data={data} />
      </Suspense>
    </>
  );
}

export default memo(Home);

export const getServerSideProps = async (ctx) => {
  const { req, query, res, asPath, pathname } = ctx;
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
    url = "zaay.ir";
  }

  let response = await axios(
    `http://core.behzi.net/api/business/byDomin/${url}?lang=fa`
  ).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return { notFound: true };
    }
  });

  return {
    props: {
      data: response?.data || null,
    },
  };
};
