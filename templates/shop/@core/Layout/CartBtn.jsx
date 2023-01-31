import { useEffect, useState } from "react";
import { Bag2 } from "iconsax-react";
import Link from "next/link";

import { useSelector } from "react-redux";

const CartBtn = ({ onShow }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartData = useSelector((state) => state.cart?.items);

  const numberOfCartItems = cartData?.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
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
    <Link
      href="/basket"
      className="border-0 text-white mt-5 flex "
      onClick={onShow}
    >
      <span className=" bg-skin-fill pt-[4px] text-[white] bg-white text-black rounded-full w-[1.7rem] h-[1.7rem]  text-center ">
        {numberOfCartItems}
      </span>
      <span className="ml-4 ">
        <Bag2 size="28" />
      </span>
    </Link>
  );
};

export default CartBtn;
