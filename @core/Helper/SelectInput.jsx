import React, { useState } from "react";

function SelectInput({ onSelect }) {
  const [active, setActive] = useState("");
  const activeSelectChangeHandler = (e) => {
    setActive(e?.target?.value);
    onSelect(e?.target?.value);
  };
  return (
    <div className="border-bordercolor border-1">
      <select
        value={active}
        dir="rtl"
        className="h-[3rem] mt-3 border-bordercolor border-2 px-4 text-center focus-visible:outline-none"
        onChange={activeSelectChangeHandler}
      >
        <option value="بزرگ" className="text-right">
          بزرگ
        </option>
        <option value="کوچک" className="text-right">
          کوچک
        </option>
        <option value="متوسط" className="text-right">
          متوسط
        </option>
      </select>
    </div>
  );
}

export default SelectInput;
