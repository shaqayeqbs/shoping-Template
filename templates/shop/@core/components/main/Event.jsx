import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo } from "react";

function Event({ event }) {
  const router = useRouter();
  const img = event?.image;

  const selectEventHandler = () => {
    router.push(`/event/${event.id}`);
  };

  return (
    <div className="ltr relative container   !w-full !h-[20rem]   !ml-3 rounded-[15px]  my-8 flex mt-14 items-center justify-center cursor-pointer">
      <div>
        {" "}
        <Image
          quality={50}
          alt={event.title}
          // loader={myLoader}
          loading="lazy"
          src={img}
          layout="fill"
          className={` object-cover !rounded-[15px]  h-max`}
          onClick={selectEventHandler}
        />
      </div>
      <div className="bg-gradient-to-t from-[#161616]  to-transparent text-[white] h-[3.5rem] w-full p-4 pt-5  absolute bottom-0 !rounded-[15px]">
        {event.title}
      </div>
    </div>
  );
}

export default memo(Event);
