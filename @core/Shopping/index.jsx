import React, { useState } from "react";
import UserAddress from "../Profile/Address/index";
import PriceDetails from "../Cart/PriceDetails";
import AddressSteps from "./AddressStep/index";

function Index() {
  const [buyStep, setByStep] = useState(1);
  const changeByStepHandler = (item) => {
    setByStep(item);
  };

  let content = "";
  switch (buyStep) {
    case 2:
      content = <UserAddress />;
      break;
    default:
      content = <AddressSteps />;
  }
  return (
    <section className="container flex justify-between py-6">
      <div className="w-full">
        {" "}
        <h2 className="text-[24px] my-8 border-r-[.3rem]  border-primary p-4">
          {buyStep === 1 && <p> آدرس و شیوه ارسال</p>}
          {buyStep === 2 && <p> پرداخت</p>}
        </h2>
        {/* <button
          onClick={() => {
            onChangeStep((prev) => prev + 1);
          }}
        >
          change step
        </button> */}
        <div>{content}</div>
      </div>
      <div className="w-[40%] mt-[7.5rem] rounded-lg font-extrabold mr-6 h-max bg-[white] p-4">
        <PriceDetails />
      </div>
    </section>
  );
}

export default Index;
