import React, { useState } from "react";
import Categories from "./Categories";

function Index({ data }) {
  const [categories, setCategories] = useState(data.slice(0, 4));

  const toggleHandler = () => {
    setCategories(categories.length <= 4 ? data : data.slice(0, 4));
  };

  return (
    <section className="grid ltr grid-cols-6 w-full mb-8">
      <button
        className="bg-skin-fill  col-span-1  text-[white] py-4"
        onClick={toggleHandler}
      >
        <div>
          <div>مشاهده</div>
          <div>13</div>
          <div>دسته بندی دیگر</div>
        </div>
      </button>
      <div className=" col-span-5">
        <Categories data={categories} />
      </div>
    </section>
  );
}

export default Index;
