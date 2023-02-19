import Image from "next/image";
import React, { useState } from "react";

function Categories({ data }) {
  const [categories, setCategories] = useState(data.slice(0, 5));

  const toggleHandler = () => {
    setCategories(categories.length <= 5 ? data : data.slice(0, 5));
  };
  return (
    <div className="grid grid-cols-6 ltr gap-5 gap-x-10  ">
      <button
        className="bg-skin-fill h-[10.6rem] w-full col-span-1  text-[white] py-4"
        onClick={toggleHandler}
      >
        <div>
          <div>مشاهده</div>
          <div>13</div>
          <div>دسته بندی دیگر</div>
        </div>
      </button>
      {categories?.map((item) => (
        <div className=" w-full h-full">
          <Image
            quality={50}
            src={item.image}
            width="240"
            loading="lazy"
            height="210"
            alt="categories"
          />
        </div>
      ))}
    </div>
  );
}

export default Categories;
