import React from "react";

function PropertiesOfProduct({ options }) {
  return (
    <>
      <h2 className="my-4 mt-10">ویژگی های محصول :</h2>
      <ul>
        {options.map((item) => (
          <li key={item.id}>
            <span className="ml-2 text-skin-muted">{item.data}</span>
            <span>{item.categoryOption.property.translate[0].data}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PropertiesOfProduct;
