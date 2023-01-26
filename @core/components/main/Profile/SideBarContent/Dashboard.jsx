import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import BackCross from "../../../../icons/profile/BackCross";
import BagHappy from "../../../../icons/profile/BagHappy";
import BagTick from "../../../../icons/profile/BagTick";
import Card from "../../../../UI/Card";
import Slider from "../../Slider/Slider";
function Dashboard({ onChangeIndex }) {
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

  const changeIndexHandler = (e) => {
    if (e?.target) {
      onChangeIndex(e.target.value);
    } else {
      onChangeIndex(e);
    }
  };
  return (
    <section>
      <Card>
        {" "}
        <div className="flex justify-between ">
          <h2>سفارشات</h2>

          <div>
            <button
              onClick={changeIndexHandler}
              value="orders"
              className="flex font-bold text-[14px] text-skin-primary border-0 "
            >
              مشاهده همه
              <div className="mt-1 mr-3">
                <AiOutlineLeft />
              </div>
            </button>
          </div>
        </div>
        <div className="px-16 pb-20 flex justify-between">
          <div className="flex ">
            {" "}
            <BagHappy />
            <div className="mt-5 mr-3">
              <strong>0 سفارش</strong>
              <div>جاری</div>
            </div>
          </div>
          <div className="flex ">
            <BagTick />
            <div className="mt-5 mr-3">
              <strong>2 سفارش</strong>
              <div>تحویل شده</div>
            </div>
          </div>
          <div className="flex ">
            <BackCross />
            <div className="mt-5 mr-3">
              <strong>0 سفارش</strong>
              <div>مرجوع شده</div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <Slider
          regular
          title="علاقه مندی ها"
          data={carousel}
          value="favorites"
          onIndexHandler={changeIndexHandler}
        />
      </Card>
      <Card>
        <Slider
          regular
          title="بازدیدهای اخیر  "
          data={carousel}
          value="recently_viewed"
          onIndexHandler={changeIndexHandler}
        />
      </Card>
    </section>
  );
}

export default Dashboard;
