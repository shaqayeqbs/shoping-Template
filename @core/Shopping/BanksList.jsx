import React from "react";
import Image from "next/image";

function BanksList({ banks }) {
  console.log(banks);
  return (
    <section className="accent-primary flex  text-skin-">
      {banks?.map((item) => (
        <div className=" text-center">
           {" "}
          <label for="post-pishtaz">
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
            className="flex w-full  justify-center text-center"
            value={item?.getway?.translate[0]?.data}
            style={{ accentColor: "inherit" }}
          />
        </div>
      ))}
    </section>
  );
}

export default BanksList;
