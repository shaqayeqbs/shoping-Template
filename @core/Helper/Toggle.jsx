import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <label
          className={
            enabled
              ? "bg-skin-fill inline-flex relative border-2 rounded-3xl items-center mr-5 cursor-pointer "
              : "inline-flex relative border-2 rounded-3xl items-center mr-5 cursor-pointer"
          }
        >
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className={
              enabled
                ? "w-11 h-6 bg-gray-200 rounded-full peer   peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']  after:absolute after:top-0.5 after:left-[2px] after:bg-[white] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                : "w-11 h-6 bg-gray-200 rounded-full peer   peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']  after:absolute after:top-0.5 after:left-[2px] after:bg-skin-fill after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            }
          ></div>
        </label>
      </div>
    </div>
  );
}
