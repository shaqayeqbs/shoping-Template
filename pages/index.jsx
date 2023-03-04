import { useState, memo } from "react";
// import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { businessAction } from "../store/Slices/BussinessSlice";
// import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../@core/UI/LoadingSpinner";
import { listOfOrder } from "../store/Slices/CartSlice";
// const ShopHome = dynamic(() => import("../templates/shop/pages/Home"));
import { GetArticles } from "../@core/api/articlesApi";
import ShopHome from "../templates/shop/pages/Home";
import mainData from "../@core/utils/serverProps";
import { getListOfProducts } from "../@core/api/productApi";

function Home({ data, articles, products }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const id = useSelector((state) => state?.businessSlice.id);
  useEffect(() => {
    async function fetchData() {
      await dispatch(listOfOrder(id));
      // const orders = response.payload?.data?.data?.orders;
    }
    fetchData();
  }, [dispatch, id]);

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
        <ShopHome data={data} articles={articles} products={products} />
      </Suspense>
    </>
  );
}

export default memo(Home);

export const getServerSideProps = async (ctx) => {
  const { req } = ctx;
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
    url = "tivarja.ir/";
  }

  let bussinessData = await mainData(ctx);
  const id = bussinessData?.data.data.domin.business.id;

  let articles = await GetArticles(id);
  let products = await getListOfProducts(id);

  return {
    props: {
      data: bussinessData?.data || null,
      articles: articles?.data?.data || null,
      products: products?.data?.data?.inventorys || null,
    },
  };
};
