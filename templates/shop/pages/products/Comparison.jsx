import React, { useState } from "react";
import Card from "../../@core/UI/Card";
import Image from "next/dist/client/image";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Specification from "../../@core/components/main/shop/DetailPage/Filter/Specification";
import Modal from "../../../../@core/UI/Modal";
import { CloseCircle } from "iconsax-react";

function Comparison({ product }) {
  console.log(product);
  const [showCompareForm, setShowCompareForm] = useState(false);
  const showCompareFormHandler = (item) => {
    setShowCompareForm((prv) => !prv);
  };
  return (
    <>
      <Modal
        open={showCompareForm}
        onClose={showCompareFormHandler}
        selector="#portal"
      >
        <button
          onClick={showCompareFormHandler}
          className="absolute left-4 top-4 border-none text-[gray]"
        >
          <CloseCircle />
        </button>
        <div className="lg:max-h-[500px]"> hiiiiiiiii</div>
      </Modal>
      <Card>
        <div className="flex justify-between px-0">
          {" "}
          <div className="w-full ">
            <div className="relative  h-[20rem] w-[20rem] mx-auto">
              <Image
                layout="fill"
                placeholder="blur"
                blurDataURL={product?.product?.files[0]?.details?.location}
                alt={product?.product?.translate[0]?.data}
                src={product?.product?.files[0]?.details?.location}
              />
            </div>
            <div className="text-center mt-4">
              {product?.product?.translate[0]?.data}
            </div>
            <div className="text-center my-6">
              <span className="text-[24px]">
                {digitsEnToFa(product?.price?.price.toLocaleString())}
              </span>
              <span className="inline-block mx-3 text-skin-muted">تومان</span>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              onClick={showCompareFormHandler}
              className="p-2 px-6 rounded-lg"
            >
              انتخاب کالا
            </button>
          </div>
        </div>
      </Card>

      <Specification
        options={product?.product.staticOption}
        dynamicOptions={product?.options}
      />
    </>
  );
}

export default Comparison;
