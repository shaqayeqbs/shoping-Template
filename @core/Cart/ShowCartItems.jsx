import React from "react";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import {
  storeNewProductOrder,
  deleteProductOrder,
  removeWholeItems,
} from "../../store/Slices/CartSlice";

function ShowCartItems({ cartData }) {
  const dispatch = useDispatch();
  const cartItemRemoveHandler = (id) => {
    dispatch(deleteProductOrder(id));
  };

  const cartItemAddHandler = async (data) => {
    const resp = await dispatch(storeNewProductOrder(data));
    return resp;
  };
  const cartRemoveWholeItemHandler = (id) => {
    dispatch(removeWholeItems(id));
  };

  const cartItems = (
    <ul className="">
      {cartData?.map((item) => (
        <CartItem
          key={item?.id}
          image={item?.productInventory?.product?.files[0]}
          title={
            item?.productInventory?.product?.productCategory?.translate[0].data
          }
          amount={item?.qty}
          price={item?.price}
          onRemove={cartItemRemoveHandler.bind(
            null,
            item?.productInventory?.id
          )}
          onAdd={cartItemAddHandler.bind(null, item?.productInventory?.id)}
          onRemoveWhole={cartRemoveWholeItemHandler.bind(
            null,
            item?.productInventory?.id
          )}
        />
      ))}
    </ul>
  );
  return <>{cartItems}</>;
}

export default ShowCartItems;
