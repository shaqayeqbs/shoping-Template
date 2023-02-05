import dynamic from "next/dynamic";
import nookies from "nookies";
import { FQ } from "../@core/api/BussinessApi";

const ShopQuestions = dynamic(() =>
  import("../templates/shop/pages/ShopQuestions")
);

function Questions({ questions }) {
  return (
    <>
      <ShopQuestions data={questions.data.businessfqs} />
    </>
  );
}

export default Questions;
export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { res } = ctx;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  );

  let result = await FQ(cookies?.id);

  return {
    props: {
      questions: result?.data || null,
    },
  };
};
