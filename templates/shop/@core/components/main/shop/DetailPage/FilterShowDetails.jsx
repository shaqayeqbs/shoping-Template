import React, { useState } from "react";
// import Comments from "./Filter/Comments";
import Description from "./Filter/Description";
import Specification from "./Filter/Specification";

function FilterShowDetails({ dynamicOptions, options, description }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const FilterHandler = (e) => {
    let value = e.target?.value;
    if (value === "0") {
      setActiveIndex(0);
    } else if (value === "1") {
      setActiveIndex(2);
    } else {
      setActiveIndex(1);
      value = "2";
    }
  };
  console.log(description);

  return (
    <section className="container text-center">
      <div className="bg-[white] my-6 rounded-default text-[22px]">
        <button
          className={`filterBtn inline-block ${
            activeIndex === 0 ? "filterBtnActive" : ""
          }`}
          value={0}
          onClick={FilterHandler}
        >
          توضیحات
        </button>
        <button
          className={`filterBtn ${activeIndex === 2 ? "filterBtnActive" : ""}`}
          value={1}
          onClick={FilterHandler}
        >
          مشخصات
        </button>
        {/* <button
          className={`filterBtn ${activeIndex === 1 ? "filterBtnActive" : ""}`}
          value={2}
          onClick={FilterHandler}
        >
          نظرات
        </button> */}
      </div>

      {activeIndex === 0 && <Description description={description} />}
      {/* {activeIndex === 1 && <Comments />} */}
      {activeIndex === 2 && (
        <Specification options={options} dynamicOptions={dynamicOptions} />
      )}
    </section>
  );
}

export default FilterShowDetails;
