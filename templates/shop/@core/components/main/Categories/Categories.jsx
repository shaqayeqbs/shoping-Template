import { digitsEnToFa } from "@persian-tools/persian-tools";
import React, { useState } from "react";

function Categories({ data=[] }) {
  const [categories, setCategories] = useState(data.slice(0, 5));

  const toggleHandler = () => {
    setCategories(categories.length <= 5 ? data : data.slice(0, 5));
  };
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 ltr gap-3 gap-x-3 ">
      {data.length > 6 && <button
        className="bg-skin-fill w-full aspect-square col-span-1  text-[white] py-4"
        onClick={toggleHandler}
      >
        <div>
          <div className="text-xs">مشاهده</div>
          <div className="font-bold">{digitsEnToFa(data.length-5)}</div>
          <div className="text-xs">دسته بندی دیگر</div>
        </div>
      </button>}
      {categories?.map((item, index) => (
        <div className=" w-full aspect-square bg-[white] flex items-center justify-center text-center rounded-xl font-bold" key={index}>
          {item.translate[0].data}
        </div>
      ))}
    </div>
  );
}

export default Categories;
