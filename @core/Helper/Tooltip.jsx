import React, { memo } from "react";

const Tooltip = memo((props) => {
  return (
    <span className="group relative w-full">
      <span className="pointer-events-none absolute -top-[2.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-skin-fill px-2 py-1 text-[white] opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/ before:border-4 before:border-transparent before:border-t-[black] before:content-[''] group-hover:opacity-100">
        {props.text}
      </span>

      {props.children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
