// import ShoppingComponent from "../@core/Shopping/index";
// import UserAddress from "../@core/Profile/Address/UserAddress";
import { useState } from "react";
import PriceDetails from "../@core/Cart/PriceDetails";
// import AddressSteps from "../@core/Shopping/AddressStep/index";
// import PostType from "../@core/Shopping/AddressStep/PostType";
import dynamic from "next/dist/shared/lib/dynamic";
import Payment from "../@core/Shopping/Payment";
const AddressSteps = dynamic(() =>
  import("../@core/Shopping/AddressStep/index")
);
function Shopping() {
  const [buyStep, setByStep] = useState(1);
  const changeByStepHandler = (num) => {
    setByStep(num);
  };

  let content = "";
  switch (buyStep) {
    case 2:
      content = <Payment />;
      break;
    default:
      content = <AddressSteps />;
  }
  return (
    <>
      <section className="container lg:flex justify-between py-6">
        <div className="w-full">
          {" "}
          <h2 className="text-[24px] my-8 border-r-[.3rem]  border-primary p-4">
            {buyStep === 1 && <p> آدرس و شیوه ارسال</p>}
            {buyStep === 2 && <p> پرداخت</p>}
          </h2>
          {/* <button
            onClick={() => {
              setByStep(1);
            }}
          >
            change step
          </button> */}
          <div>{content}</div>
        </div>
        <div className="lg:w-[40%] lg:mt-[7.5rem] rounded-lg font-extrabold lg:mr-6 h-max bg-[white] p-4">
          <PriceDetails changeStep={changeByStepHandler} />
        </div>
      </section>
    </>
  );
}

export default Shopping;
