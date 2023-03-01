import Image from "next/image";
import { Trash } from "iconsax-react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useState } from "react";
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
    <li className="bg-[white] text-center mb-8 rounded-xl flex justify-between p-4">
      <div className="flex">
        <div className="relative ml-4 h-[6.8rem] w-[6.8rem]">
          {props?.image && (
            <Image
              src={props?.image}
              layout="fill"
              className="h-[100%]"
              alt="item"
            />
          )}
          {!props.image && (
            <Image
              src="https://via.placeholder.com/300/ccc/fff.png"
              layout="fill"
              className="h-[100%]"
              alt="item"
            />
          )}
        </div>
        <div>
          <h3 className="text-md">{props?.title}</h3>
        </div>
      </div>

      <div className="text-center">
        {off_price && (
          <div className="line-through">
            {props?.price ? (props?.price ? digitsEnToFa(price) : 0) : ""}
          </div>
        )}
        <div className="flex  my-2 text-center w-full justify-end">
          <div className="text-[24px] text-skin-primary font-extrabold">
            {" "}
            {off_price ? digitsEnToFa(off_price) : digitsEnToFa(price)}
          </div>
          <p className="mx-4 text-skin-text font-semibold mt-2">تومان</p>
        </div>
        <div className="lg:flex">
          {" "}
          <div className=" mr-10">x {amount}</div>
          <div className="border-2 text-skin-primary h-[2.5rem] py-1 px-3 rounded-lg mx-3">
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
