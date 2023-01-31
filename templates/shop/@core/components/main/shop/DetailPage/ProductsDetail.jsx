import { Check, Heart, Message, Share } from "iconsax-react";
import { useState } from "react";
import ColorPalet from "../../../../Helper/ColorPalet";
import RemainTime from "../../../../Helper/RemainTime";
import SelectInput from "../../../../Helper/SelectInput";
import StaticSlider from "../../../../Helper/StaticSlider";
import Slider from "../../Slider/Slider";
import FilterShowDetails from "./FilterShowDetails";
import PropertiesOfProduct from "./PropertiesOfProduct";
import Vote from "./Vote";
import ProductDetailForm from "./ProductDetailsForm";
import { cartActions } from "../../../../../store/Slices/CartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const carousel = [
  {
    id: "9",
    image: "/images/plant.png",
    price: "285000",
    new: true,
  },
  { id: "10", image: "/images/plant.png", price: "285000", new: true },
  { id: "11", image: "/images/plant.png", price: "285000", new: true },
];

function ProductsDetail({ item }) {
  const [size, setSize] = useState("بزرگ");

  const dispatch = useDispatch();
  const addToCartHandler = (amount) => {
    const myItem = {
      amount: amount,
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
    };
    dispatch(cartActions.addItem({ item: myItem }));
  };

  const onSelectHandler = (data) => {
    setSize(data);
  };
  const emojiStyle =
    "bg-skin-secondary rounded-lg h-[3rem] w-[3rem] mx-2 p-2 text-skin-primary";
  return (
    <>
      <section className="cadr container   !mt-16 !p-8 text-skin-">
        <div className="xl:flex justify-between space-x-0 !gap-0">
          {" "}
          <div className="w-full mx-auto xl:w-[45%]">
            <StaticSlider items={item.carousel} />
          </div>
          <div className=" text-right">
            <div className=" border-b-2 pb-4  border-bordercolor ">
              <h2 className="text-right m-6 text-[24px] mr-0">{item.title}</h2>
              <div className="md:flex justify-between  w-[100%] break-all">
                <div className="text-right w-[70%] ">
                  <span className="ml-4">برند:</span>
                  <span className="text-skin-primary">{item.brand}</span>
                  <Vote />
                </div>

                <div className="w-full ">
                  <span className="mx-4 mr-0">دسته بندی:</span>
                  <span className="text-skin-primary w-[60%]  ">
                    {item.category}
                  </span>
                  <div className="flex mt-5">
                    <Message size="16" variant="Outline" />
                    <div className="mr-2 text-[12px]"> 20 نظر</div>
                  </div>
                </div>

                <div className="">
                  {" "}
                  <RemainTime />
                </div>
              </div>
            </div>
            <div className="text-right">
              {" "}
              <div className="md:flex justify-between">
                <ColorPalet />
                <div>
                  <div className="my-4 font-bold">اندازه :{size}</div>
                  <SelectInput onSelect={onSelectHandler} />
                </div>
              </div>
              <PropertiesOfProduct />
              <div className="flex justify-between w-full my-10 font-bold ">
                {" "}
                <div>
                  <div> قیمت کالا :</div>
                  <div className="my-4">
                    <span className="text-skin-primary mx-2 text-2xl">
                      285000
                    </span>
                    <span className="text-sm text-skin-muted line-through">
                      310٬000
                    </span>
                    <span>تومان</span>
                  </div>
                </div>
                <div className="mr-10 w-full">
                  <div> وضعیت کالا :</div>
                  <div className="text-skin-primary my-4">موجود</div>
                </div>
              </div>
            </div>
            <div className=" lg:flex justify-between">
              {" "}
              <ProductDetailForm
                id={item.id}
                onAddToCart={addToCartHandler}
                title={item.title}
              />
              <Link href="/basket">basket</Link>
              {/* <button className="bg-skin-fill mb-5 rounded-lg p-2 text-[white]">
                افزودن به سبد خرید
              </button> */}
              <div className="flex">
                {" "}
                <div className={emojiStyle}>
                  {" "}
                  <Check size="32" />
                </div>
                <div className={emojiStyle}>
                  <Share size="32" />
                </div>
                <div className={emojiStyle}>
                  <Heart size="32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilterShowDetails />
      <div className="container">
        <Slider title="گلدان های جدید" data={carousel} />
      </div>
    </>
  );
}

export default ProductsDetail;
