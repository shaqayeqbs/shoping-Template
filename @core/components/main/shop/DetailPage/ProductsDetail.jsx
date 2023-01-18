import { Message } from "iconsax-react";
import { FaStar } from "react-icons/fa";
import ColorPalet from "../../../../Helper/ColorPalet";
import RemainTime from "../../../../Helper/RemainTime";
import StaticSlider from "../../../../Helper/StaticSlider";
import Slider from "../../Slider/Slider";
import FilterShowDetails from "./FilterShowDetails";

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
  return (
    <>
      <section className="cadr container   !p-8 text-skin-">
        <div className="flex justify-between space-x-0 !gap-0">
          {" "}
          <div className="w-[45%]">
            <StaticSlider items={item.carousel} />
          </div>
          <div className="w-full">
            <div className="w-full  border-b-2 pb-4  border-bordercolor">
              <h2 className="text-right m-6 text-[24px] mr-0">{item.title}</h2>
              <div className="flex justify-between">
                <div className="text-right">
                  <span className="ml-4">برند:</span>
                  <span className="text-skin-primary">{item.brand}</span>
                  <div className="flex justify-between text-right">
                    <div className="flex text-[12px] justify-center rounded-md bg-skin-gray bg-[#f6f6f6] p-1  mt-3 mr-0 text-center">
                      <div> 4.3</div>
                      <div className="mx-1 text-[#ff8d14] p-1">
                        <FaStar />
                      </div>
                    </div>
                    <div className="mt-4 mx-2 text-[12px]">از 20 رای</div>
                  </div>
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
            <div className="my-10 text-right">
              {" "}
              <ColorPalet />
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
