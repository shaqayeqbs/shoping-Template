import { useState } from "react";
import Modal from "../../../../UI/Modal";
import { Bag2 } from "iconsax-react";
import { BsCheckCircle } from "react-icons/bs";
import { cartActions } from "../../../../../../../store/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { Messages } from "../../../../constants/messages";
import { Trash } from "iconsax-react";
const ProductDetailForm = ({ onAddToCart, id, title }) => {
  const [productAddedModal, setProductAddedModal] = useState(false);
  const [message, setMessage] = useState(Messages.ADDED_TO_CART);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const AddToCartHanlder = () => {
    onAddToCart(1);
    setCounter((prev) => prev + 1);
    setMessage(Messages.ADDED_TO_CART);
    setProductAddedModal((prev) => !prev);
  };
  const removefromCartHanlder = () => {
    setCounter((prev) => prev - 1);
    dispatch(cartActions.removeItem(id));
  };
  const showModalHandler = () => {
    setProductAddedModal((prev) => !prev);
  };
  const removeWholeItemHandler = () => {
    setCounter(0);
    setMessage(Messages.REMOVED_FROM_CART);
    dispatch(cartActions.removeWholeItem(id));

    setProductAddedModal((prev) => !prev);
  };
  return (
    <>
      {productAddedModal && (
        <Modal
          className="!w-[29%]"
          open={showModalHandler}
          onClose={showModalHandler}
          selector="#portal"
        >
          <div className="mx-auto text-center w-[90%] p-10">
            <div className="text-skin-primary text-[76px] mx-auto my-6 w-min">
              <BsCheckCircle />
            </div>
            <h2 className="w-full">{title}</h2>

            <p className="text-center my-4"> {message}</p>
            <div className="flex justify-center">
              <button
                className="bg-skin-fill text-[white] flex text-white mx-2 pt-2 px-6 py-1 rounded-lg"
                type="submit"
              >
                <span className="mx-2">
                  <Bag2 variant="Bold" />
                </span>
                سبد خرید
              </button>
              <button
                onClick={showModalHandler}
                className="  border-[gray] py-2 px-6 rounded-md text-[gray]"
              >
                بستن
              </button>
            </div>
          </div>
        </Modal>
      )}

      {counter > 0 && (
        <div className="flex border-2 border-primary text-skin-primary rounded-lg pt-2">
          <div>
            {" "}
            <button
              className="border-0  mx-4"
              type="submit"
              onClick={AddToCartHanlder}
            >
              +
            </button>
          </div>
          <div className="mt-1 mx-3"> {counter}</div>
          {counter > 1 && (
            <div>
              {" "}
              <button
                className="border-0 mx-4"
                type="submit"
                onClick={removefromCartHanlder}
              >
                -
              </button>
            </div>
          )}
          <div>
            <button
              className="border-0 block text-skin-primary !pb-[.5rem]"
              onClick={removeWholeItemHandler}
            >
              <Trash size="24" className="" variant="Bold" />
            </button>
          </div>
        </div>
      )}
      {!counter && (
        <button
          className="bg-skin-fill mb-5 rounded-lg p-2 text-[white]"
          onClick={AddToCartHanlder}
        >
          افزودن به سبد خرید
        </button>
      )}
    </>
  );
};

export default ProductDetailForm;
