import React from "react";

function Specification({ dynamicOptions, options }) {
  const properties = [
    {
      id: 1,
      title: "ابعاد",
      description: "۲۵x۲۵x۳۰ سانتی‌متر",
    },
    {
      id: 2,
      title: "وزن",
      description: "۳۵۰ گرم",
    },
    {
      id: 3,
      title: "جنس",
      description: "سرامیک",
    },
    {
      id: 4,
      title: "محل تولید",
      description: "لالجین همدان",
    },
    {
      id: 5,
      title: "کاربرد",
      description: "تزیینی، مصرفی، کاربردی",
    },
    {
      id: 6,
      title: "سایر توضیحات",
      description: "گلدان لعاب کوره ای دارد و رنگ ثابت است",
    },
  ];
  return (
    <section className="bg-[white] rounded-default text-right p-8">
      <h3 className="mb-6">مشخصات کلی</h3>
      <ul>
        {options.map((item) => (
          <li>
            <div className="bg-skin-background w-[20%] ml-6 mb-6 inline-block p-3 rounded-md">
              {item.data}
            </div>
            <div className="inline-block bg-skin-background w-[70%] p-3 rounded-md">
              {item.categoryOption.property.translate[0].data}
            </div>
          </li>
        ))}
        {dynamicOptions.map((item) => (
          <li>
            <div className="bg-skin-background w-[20%] ml-6 mb-6 inline-block p-3 rounded-md">
              {item.data}
            </div>
            <div className="inline-block bg-skin-background w-[70%] p-3 rounded-md">
              {item.CategoryOption?.property.translate[0]?.data}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specification;
