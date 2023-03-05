import Image from "next/image";
import { Trash } from "iconsax-react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useState } from "react";
import { Gallery } from "iconsax-react";
const CartItem = (props) => {
  const [amount, setAmount] = useState(+props.amount);
  const { price, off_price, final_price } = props.price;
  //   const price = `$${+props.price.toFixed(2)}`;

  const onRemoveHandler = () => {
    props.onRemove();
    setAmount((prev) => prev - 1);
  };
  const onAddHandler = () => {
    props.onAdd();
    setAmount((prev) => prev + 1);
  };

  return (
    <li className="bg-[white] relative text-center mb-8 rounded-xl lg:flex justify-between p-4">
      <div className="lg:flex ">
        <div className="relative ml-4 h-[15rem] lg:h-[6.8rem]  w-full lg:w-[6.8rem]">
          {props?.image && (
            <Image
              src={props?.image}
              layout="fill"
              className="h-[100%] mx-auto inline-block"
              alt="item"
            />
          )}
          {!props.image && (
            <div className="bg-skin-background rounded-xl h-full  w-full flex items-center justify-center   ">
              <Gallery size="40" className="top-[30%] " />
            </div>
          )}
        </div>
        <div>
          <h3 className=" text-md mt-6 lg:mt-0">{props?.title}</h3>
        </div>
      </div>

      <div className="text-center ">
        {off_price && (
          <div className="line-through">
            {props?.price ? (props?.price ? digitsEnToFa(price) : 0) : ""}
          </div>
        )}
        <div className="flex justify-center my-2 text-center w-full lg:justify-end">
          <div className="text-[24px] text-skin-primary font-extrabold">
            {" "}
            {off_price ? digitsEnToFa(off_price) : digitsEnToFa(price)}
          </div>
          <p className="mx-4 text-skin-text font-semibold mt-2">تومان</p>
        </div>
        <div className="flex">
          {" "}
          <div className=" mr-10">x {amount}</div>
          <div className="border-2 text-skin-primary h-[2.5rem] py-1 px-3 w-max  rounded-lg mx-3">
            <button
              onClick={onRemoveHandler}
              className="border-0  mx-1 p-1 px-3 rounded-lg"
            >
              −
            </button>
            1
            <button
              onClick={onAddHandler}
              className="border-0 mx-1 p-1 px-3 rounded-lg"
            >
              +
            </button>
          </div>
          <button
            className="border-0 text-skin-primary"
            onClick={props.onRemoveWhole}
          >
            <Trash size="24" className="" variant="Bold" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
