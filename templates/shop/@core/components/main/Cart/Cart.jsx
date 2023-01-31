import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../../../../store/Slices/CartSlice";

const Cart = (props) => {
  const cartData = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const hasItems = cartData?.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const cartItemAddHandler = (data) => {
    const item = { ...data, amount: 1 };
    dispatch(cartActions.addItem({ item }));
  };
  const cartRemoveWholeItemHandler = (id) => {
    dispatch(cartActions.removeWholeItem(id));
  };
  const cartItems = (
    <ul className="">
      {cartData?.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemoveWhole={cartRemoveWholeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <section>
      <h2 className="text-[24px] my-8 border-r-[.3rem]  border-primary p-4">
        سبد خرید
      </h2>
      <div className="md:flex ">
        <div className="w-full "> {cartItems}</div>
        <div className="w-[40%] font-extrabold mr-6 h-max bg-[white] p-4">
          <h3 className="text-center mb-8">جزئیات قیمت</h3>
          <div className=" flex justify-between">
            <div className="">قیمت محصولات :</div>
            <span>{totalAmount || 0}</span>
          </div>
          <div className=" flex justify-between my-6 border-b-2 border-bordercolor pb-6 text-skin-primary">
            <div className="">تخفیف محصولات :</div>
            <span>{0}</span>
          </div>
          <div className=" flex justify-between">
            <div className=""> مبلغ قابل پرداخت</div>
            <span>{totalAmount || 0}</span>
          </div>
          <div className="">
            {hasItems && (
              <button className="bg-skin-fill text-[white] w-full mt-12 text-white font-medium  rounded-lg  my-2">
                ادامه فرآیند خرید
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
