import { Message } from "iconsax-react";
import { FaStar } from "react-icons/fa";
import ColorPalet from "../../../Helper/ColorPalet";
import StaticSlider from "../../../Helper/StaticSlider";
import useTimer from "../../../hooks/useTimer";
import Slider from "../Slider/Slider";
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
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();

  const timerBtn = "bg-skin-opacity p-2 px-4 text-skin-primary rounded-md";
  const timerDevider = "text-skin-pzaarimary mx-2";
  return (
    <>
      <section className="cadr container   !p-8 !pt-20 mt-40 bg-[red] text-skin-">
        <div className="flex bg-[red]">
          {" "}
          <div className="w-[40%]">
            eeeeeeeeeeeeeeee
            <StaticSlider items={item.carousel} />
          </div>
          <div className="flex">
            {" "}
            <div className="w-full  border-b-2 h-[11rem] border-bordercolor">
              <h2 className="text-right m-6 text-2xl">{item.title}</h2>
              <div className="flex justify-between">
                <div>
                  <span className="ml-4">ffffبرند:</span>
                  <span className="text-skin-primary">{item.brand}</span>
                  <div className="flex ">
                    <div className="flex justify-center rounded-md bg-skin-gray bg-[#f6f6f6] p-1  m-3 text-center">
                      <div> 4.3</div>
                      <div className="mx-1 text-[#ff8d14] p-1">
                        <FaStar />
                      </div>
                    </div>{" "}
                    <div className="mt-4 mx-2">از 20 رای</div>
                  </div>
                </div>
                <div>
                  <span className="mx-4">دسته بندی:</span>
                  <span className="text-skin-primary">{item.category}</span>
                  <div className="flex mt-5 ">
                    <Message size="24" variant="Outline" />
                    <div className="mr-2"> 20 نظر</div>
                  </div>
                </div>
                <div>
                  {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
                    <h3 className="text-center my-2" dir="ltr">
                      <span className={timerBtn}>{FaHours}</span>
                      <span className={timerDevider}>:</span>
                      <span className={timerBtn}>{Faminutes}</span>{" "}
                      <span className={timerDevider}>:</span>
                      {seconds < 10 ? (
                        <span className={timerBtn}>۰{Faseconds}</span>
                      ) : (
                        <span className={timerBtn}>{Faseconds}</span>
                      )}
                    </h3>
                  )}
                </div>
              </div>
              <div className="my-10 text-right">
                {" "}
                <ColorPalet />
                <div>ehhhhhhhhh</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider title="گلدان های جدید" data={carousel} />
    </>
  );
}

export default ProductsDetail;
