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

const carousel = [
  {
    id: "9",
    image: "/images/plant.png",
    price: "285,000",
    new: true,
  },
  { id: "10", image: "/images/plant.png", price: "285,000", new: true },
  { id: "11", image: "/images/plant.png", price: "285,000", new: true },
];

function ProductsDetail({ item }) {
  const [size, setSize] = useState("بزرگ");

  const onSelectHandler = (data) => {
    setSize(data);
  };
  const emojiStyle = "bg-skin-secondary rounded-lg mx-2 p-2 text-skin-primary";
  return (
    <>
      <section className="cadr container  !mt-16 !p-8 text-skin-">
        <div className="flex justify-between space-x-0 !gap-0">
          {" "}
          <div className="w-[45%]">
            <StaticSlider items={item.carousel} />
          </div>
          <div className="w-full text-right">
            <div className="w-full  border-b-2 pb-4  border-bordercolor ">
              <h2 className="text-right m-6 text-[24px] mr-0">{item.title}</h2>
              <div className="flex justify-between">
                <div className="text-right">
                  <span className="ml-4">برند:</span>
                  <span className="text-skin-primary">{item.brand}</span>
                  <Vote />
                </div>

                <div className=" mr-6 ">
                  <span className="mx-4 mr-0">دسته بندی:</span>
                  <span className="text-skin-primary">{item.category}</span>
                  <div className="flex mt-5">
                    <Message size="16" variant="Outline" />
                    <div className="mr-2 text-[12px]"> 20 نظر</div>
                  </div>
                </div>
                <div className="mx-auto"></div>
                <RemainTime />
              </div>
            </div>
            <div className="text-right">
              {" "}
              <div className="flex justify-between">
                <ColorPalet />
                <div>
                  <div className="my-4 font-bold">اندازه :{size}</div>
                  <SelectInput onSelect={onSelectHandler} />
                </div>
              </div>
              <PropertiesOfProduct />
              <div className="flex justify-between w-[55%] my-10 font-bold ">
                {" "}
                <div>
                  <div> قیمت کالا :</div>
                  <div className="my-4">
                    <span className="text-skin-primary mx-2 text-2xl">
                      285٬000
                    </span>
                    <span className="text-sm text-skin-muted line-through">
                      310٬000
                    </span>
                    <span>تومان</span>
                  </div>
                </div>
                <div>
                  <div> وضعیت کالا :</div>
                  <div className="text-skin-primary my-4">موجود</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              {" "}
              <button className="bg-skin-fill rounded-lg p-2 text-[white]">
                افزودن به سبد خرید
              </button>
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
      <Slider title="گلدان های جدید" data={carousel} />
    </>
  );
}

export default ProductsDetail;
