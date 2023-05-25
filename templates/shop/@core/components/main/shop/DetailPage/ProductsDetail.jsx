import { Check, Heart, Message, Share } from "iconsax-react";
import { useState } from "react";
// import ColorPalet from "../../../../Helper/ColorPalet";
import RemainTime from "../../../../Helper/RemainTime";
// import SelectInput from "../../../../Helper/SelectInput";
import StaticSlider from "../../../../Helper/StaticSlider";
// import Slider from "../../Slider/Slider";
import FilterShowDetails from "./FilterShowDetails";
import PropertiesOfProduct from "./PropertiesOfProduct";
import Vote from "./Vote";

import Link from "next/dist/client/link";
import ProductDetailForm from "./ProductDetailsForm";

import { useDispatch } from "react-redux";

import { storeNewProductOrder } from "../../../../../../../store/Slices/CartSlice";
import { storeNewFavoriteToUser } from "../../../../../../../@core/api/userApi";
import ShareModal from "./Share/ShareModal";
import {
  storedFavortie,
  unAuthorized,
} from "../../../../../../../@core/constants/toasts-messages";

function ProductsDetail({ item }) {
  const [showSharedModal, setShowSharedModal] = useState(false);
  const dispatch = useDispatch();
  console.log(item, "item");
  const addToCartHandler = async () => {
    const res = await dispatch(storeNewProductOrder(item?.id));
    console.log(res, "addddddddd");
    return res;
  };

  const toggleShowSharedModal = () => {
    setShowSharedModal((prev) => !prev);
  };
  const onAddToFavoriteHandler = async () => {
    const data = {
      data: "product",
      id: item.inventory.id,
    };
    const res = await storeNewFavoriteToUser(item?.id);

    if (res === 200) {
      storedFavortie();
    } else {
      unAuthorized();
    }
  };

  const emojiStyle =
    "bg-skin-secondary rounded-lg h-[3rem] w-[3rem] mx-2 p-2 text-skin-primary";
  return (
    <>
      {showSharedModal && (
        <ShareModal isOpen={showSharedModal} onClose={toggleShowSharedModal} />
      )}
      <section className=" bg-[white] rounded-xl container   !mt-16 !p-8 text-skin-">
        <div className="xl:flex justify-between space-x-0 !gap-0">
          <div className="lg:w-full mx-auto ">
            <StaticSlider items={item?.carousel} />
          </div>
          <div className=" text-right w-full">
            <div className=" border-b-2  py-8 lg:!py-20 w-full  border-bordercolor ">
              <h2 className="text-right m-6 text-[24px] mr-0">{item.title}</h2>
              <div className="md:flex justify-between  w-[100%] mb-8 break-all">
                <div className="text-right w-[70%]  ">
                  <span className="ml-2 ">برند:</span>
                  <span className=" inline-block  text-skin-primary ml-2">
                    {item?.brand}
                  </span>
                  {/* <Vote /> */}
                </div>

                <div className="w-full ">
                  <span className="mx-4 mr-0">دسته بندی:</span>
                  <span className="text-skin-primary w-full  ">
                    {item?.categoy}
                  </span>
                  <div className="flex mt-5">
                    <Message size="16" variant="Outline" />
                    <div className="mr-2 text-[12px]"> 20 نظر</div>
                  </div>
                </div>

                <div className="">
                  {" "}
                  <RemainTime remainTime="2023-09-04" />
                </div>
              </div>
            </div>
            <div className="text-right">
              {" "}
              <div className=" justify-between">
                {/* <div>
                  <div className="my-4 font-bold">اندازه :{size}</div>
                  <SelectInput onSelect={onSelectHandler} />
                </div> */}
                {/* <PropertiesOfProduct options={item.properties} /> */}
                <h2 className="my-4 mt-10">ویژگی های محصول :</h2>
                {item?.properties?.map((each) => (
                  <div key={each.id} className="my-4">
                    <span>{each.data}:</span>
                    <span className="mx-4">{each.title}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full my-10 font-bold ">
                {" "}
                <div>
                  <div> قیمت کالا :</div>
                  <div className="my-4">
                    <span className="text-skin-primary mx-2 md:text-2xl">
                      {item?.price
                        ? item.price.toLocaleString()
                        : item.lastPrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-skin-muted line-through">
                      {item.lastPrice && item.price.toLocaleString()}
                    </span>
                    <span>تومان</span>
                  </div>
                </div>
                <div className="mr-10 w-full">
                  <div> وضعیت کالا :</div>
                  <div className="text-skin-primary my-4">
                    {item.avalable > 0 ? "موجود" : "نا موجود"}
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:flex justify-between">
              <ProductDetailForm
                id={item.id}
                onAddToCart={addToCartHandler}
                title={item.title}
                item={item}
              />
              {/* <button className="bg-skin-fill mb-5 rounded-lg p-2 text-[white]">
                افزودن به سبد خرید
              </button> */}
              <div className="flex">
                {" "}
                <Link
                  href={{
                    pathname: "/products/comparison",
                    query: { id: item?.id },
                  }}
                  className={emojiStyle}
                >
                  {" "}
                  <Check size="32" />
                </Link>
                <button onClick={toggleShowSharedModal} className={emojiStyle}>
                  <Share size="32" />
                </button>
                <button onClick={onAddToFavoriteHandler} className={emojiStyle}>
                  <Heart size="32" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilterShowDetails
        dynamicOptions={item.properties}
        options={item?.properties}
        description={item?.properties}
      />
      {/* <div className="container">
        <Slider title="گلدان های جدید" data={carousel} />
      </div> */}
    </>
  );
}

export default ProductsDetail;
