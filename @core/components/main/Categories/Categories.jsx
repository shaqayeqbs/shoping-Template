import React from "react";
import Image from "next/image";

function Categories({ data }) {
  return (
    <div className="grid grid-cols-5 gap-x-16 ">
      {data.map((item) => (
        <div className=" w-full h-full">
          <Image src={item.image} width="200" height="210" alt="categories" />
        </div>
      ))}
    </div>
  );
}

export default Categories;
