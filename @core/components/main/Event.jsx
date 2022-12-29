import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

function Event({ event }) {
  return (
    <div
      className={`relative flex justify-between w-full  ml-2 rounded-[15px] pr-10 my-8`}
      style={{ backgroundColor: event.color }}
    >
      <div className="  translate-y-[20%] text-[white] w-[50%] ">
        <h2>
          <strong className="text-4xl">
            {event.precent ? `تا  ${event.precent}  تخفیف ` : event.title}{" "}
          </strong>
        </h2>
        <p className="my-4">{event.description} </p>
        <div
          className=" bg-[white] rounded-3xl p-2  text-lg font-bold my-12 text-center w-[9.5rem]"
          style={{ color: event.color }}
        >
          <Link href="/">مشاهده و خرید</Link>
        </div>
      </div>
      <div>
        <Image
          alt="slider photo"
          src={event.image}
          width={300}
          height={300}
          className={`object-cover bg-[${event.color}]`}
        />
      </div>
    </div>
  );
}

export default Event;
