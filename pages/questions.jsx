import dynamic from "next/dynamic";

const ShopQuestions = dynamic(() =>
  import("../templates/shop/pages/ShopQuestions")
);

function Questions() {
  return (
    <>
      <ShopQuestions />
    </>
  );
}

export default Questions;
