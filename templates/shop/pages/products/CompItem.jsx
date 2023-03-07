import React from "react";
import Image from "next/legacy/image";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Gallery } from "iconsax-react";
function CompItem({ product }) {
  console.log(product, "kkkkkkkk");
  return (
    <div className="w-full ">
      <div className="relative  h-[20rem] w-[20rem] mx-auto">
        {product?.product?.files?.[0] && (
          <Image
            layout="fill"
            // placeholder="blur"
            blurDataURL={product?.product?.files?.[0]?.details?.location}
            alt={product?.product?.translate?.[0]?.data}
            src={product?.product?.files?.[0]?.details?.location}
          />
        )}
        {!product?.product?.files[0] && (
          <div className="bg-skin-background rounded-xl  aspect-square  mb-5 w-full flex items-center justify-center   ">
            <Gallery size="70" className="top-[30%] " />
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        {product?.product?.translate[0]?.data}
      </div>
      <div className="text-center my-6">
        <span className="text-[24px]">
          {digitsEnToFa(product?.price?.price?.toLocaleString() || 0)}
        </span>
        <span className="inline-block mx-3 text-skin-muted">تومان</span>
      </div>
    </div>
  );
}

export default CompItem;
