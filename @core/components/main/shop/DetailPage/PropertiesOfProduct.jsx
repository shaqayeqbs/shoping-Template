import React from "react";

function PropertiesOfProduct() {
  const properties = [
    {
      id: 1,
      title: "لورم ایپسوم:",
      description: " متن پیشفرض",
    },
    {
      id: 2,
      title: "لورم ایپسوم:",
      description: " متن پیشفرض",
    },
    {
      id: 3,
      title: "لورم ایپسوم:",
      description: " متن پیشفرض",
    },
    {
      id: 4,
      title: "لورم ایپسوم:",
      description: " متن پیشفرض",
    },
    {
      id: 5,
      title: "لورم ایپسوم:",
      description: " متن پیشفرض",
    },
    {
      id: 6,
      title: "لورم ایپسوم:",
      description: " متن پیشفرض",
    },
  ];
  return (
    <>
      <h2 className="my-4 mt-10">ویژگی های محصول :</h2>
      <ul>
        {properties?.map((item) => (
          <li key={item.id}>
            <span className="ml-2 text-skin-muted">{item.title}</span>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PropertiesOfProduct;
