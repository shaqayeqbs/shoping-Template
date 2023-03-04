import React from "react";
import Image from "next/image";
import { setBusnessGateWayTospecifiedOrderAPi } from "../api/gatewayApi";
import { useSelector } from "react-redux";

function BanksList({ banks }) {
  console.log(banks);
  const orderId = useSelector((state) => state.cart.orderId);
  const setGatewayHandler = async (id) => {
    console.log(orderId, id);
    const res = await setBusnessGateWayTospecifiedOrderAPi({
      id: orderId,
      getway_id: id,
    });
    console.log(res, "bank");
  };
  return (
    <section className="accent-primary flex  text-skin-">
      {banks?.map((item) => (
        <div key={item.id} className=" text-center">
           {" "}
          <label htmlFor="post-pishtaz">
            <Image
              src={item?.getway?.files[0]?.details?.location}
              width="70"
              height="70"
            />
          </label>
           {" "}
          <input
            type="radio"
            name="bank"
            onClick={setGatewayHandler.bind(null, item.id)}
            className="flex w-full  justify-center text-center"
            value={item?.id}
            style={{ accentColor: "inherit" }}
          />
        </div>
      ))}
    </section>
  );
}

export default BanksList;
