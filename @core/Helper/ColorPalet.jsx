import React, { useState, memo } from "react";

function ColorPalet() {
  const data = [
    { id: 1, color: "purple", title: "بنفش" },
    { id: 2, color: "blue", title: "آبی" },
    { id: 3, color: "yellow", title: "زرد" },
    { id: 4, color: "pink", title: "صورتی" },
    { id: 5, color: "orange", title: "نارنجی" },
    { id: 6, color: "black", title: "مشکی" },
    { id: 7, color: "red", title: "قرمز" },
    { id: 8, color: "green", title: "سبز" },
  ];
  const [active, setActive] = useState(data[0]?.color);
  const colorChangeHandler = (e) => {
    setActive(e?.target?.value);
  };

  return (
    <section>
      <h2 className="my-6">
        <span>رنگ:</span>
        <span>{active.title}</span>
      </h2>
      <div className="flex ">
        {data?.map((item) => (
          <button
            key={item.id}
            value={item.color}
            onClick={colorChangeHandler}
            className={
              active === item.color
                ? "w-8 after:content-['_✔️'] rounded-md border-0 cursor-pointer ml-2 "
                : "w-8 h-8 ml-2 rounded-md border-0 cursor-pointer"
            }
            style={{ background: item.color }}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default memo(ColorPalet);
