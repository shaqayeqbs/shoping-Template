import { useEffect, useState } from "react";
import { Bag2 } from "iconsax-react";
import Link from "next/link";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import { useSelector } from "react-redux";

const CartBtn = ({ onShow }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartData = useSelector((state) => state.cart?.items);

  let numOfCartItems = 0;

  for (const each in cartData) {
    numOfCartItems = numOfCartItems + cartData[each].qty;
  }

  const btnClasses = `class ${btnIsHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (cartData?.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartData]);
  // if (!numOfCartItems) {
  //   return;
  // }

  return (
    <Link href="/basket" className="relative  border-0 text-white mt-6 flex">
      <span className="absolute left-[2.2rem] -z-0 top-[-.4rem]   bg-skin-fill text-[12px] pt-[2px] text-[white] bg-white text-black rounded-full w-[1.3rem] h-[1.3rem]  text-center ">
        {digitsEnToFa(numOfCartItems)}
      </span>

      <span className="ml-4  !z-40 ">
        <Bag2 size="28" />
      </span>
    </Link>
  );
};

export default CartBtn;
