import Image from "next/image";
import React, { memo } from "react";
import Tooltip from "../../Helper/Tooltip";

function Event({ event }) {
  const img = event?.files[0]?.details?.location;

  return (
    <div
      className={`ltr relative  w-full h-full   ml-2 rounded-[15px]  my-8 flex mt-14 items-center justify-center`}
      // style={{ backgroundColor: event.color }}
    >
      <Tooltip text={event.title}>
        {" "}
        <Image
          quality={50}
          alt={event.title}
          // loader={myLoader}
          loading="lazy"
          src={img}
          width={2000}
          height={1330}
          className={` object-cover   !rounded-[15px] `}
        />
      </Tooltip>
    </div>
  );
}

export default memo(Event);
