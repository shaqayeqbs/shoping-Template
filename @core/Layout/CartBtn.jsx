import { useEffect, useState } from "react";
import { Bag2 } from "iconsax-react";
import Link from "next/link";

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

  return (
    <Link href="/basket" className="relative border-0 text-white mt-6 flex ">
      <span className="absolute left-[2.3rem] top-[-.5rem]   bg-skin-fill text-[12px] pt-[2px] text-[white] bg-white text-black rounded-full w-[1.3rem] h-[1.3rem]  text-center ">
        {numOfCartItems}
      </span>
      <span className="ml-4 mt-[] ">
        <Bag2 size="28" />
      </span>
    </Link>
  );
};

export default CartBtn;
