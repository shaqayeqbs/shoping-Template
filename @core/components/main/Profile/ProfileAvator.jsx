import Image from "next/image";
import React from "react";
function ProfileAvator() {
  return (
    <div className="inline-flex mt-[4px] w-full justify-center rounded-md border-0 border-gray-300 bg-white text-sm font-medium text-gray-700  hover:bg-[transparent]">
      <Image
        quality={50}
        src="/images/plant.png"
        width={500}
        height={500}
        loading="lazy"
        className="object-cover rounded-full "
      />
    </div>
  );
}

export default ProfileAvator;
