import { useSelector } from "react-redux";
import ShowCartItems from "./ShowCartItems";
import PriceDetails from "./PriceDetails";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.items);

  return (
    <section>
      <h2 className="text-[24px] my-8 border-r-[.3rem]  border-primary p-4">
        سبد خرید
      </h2>
      <div className="md:flex ">
        <div className="w-full ">
          <ShowCartItems cartData={cartData} />
        </div>
        <div className="w-[40%] font-extrabold mr-6 h-max bg-[white] p-4">
          <PriceDetails />
        </div>
      </div>
    </section>
  );
};

export default Cart;
