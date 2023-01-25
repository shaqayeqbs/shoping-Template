import { useRef, useState } from "react";
import Modal from "../../../../UI/Modal";
import { Bag2 } from "iconsax-react";
import { BsCheckCircle } from "react-icons/bs";

const ProductDetailForm = ({ onAddToCart, id, title }) => {
  const [productAddedModal, setProductAddedModal] = useState(false);

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };
  const showModalHandler = () => {
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

            <p className="text-center my-4">به سبد شما اضافه شد</p>
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
      <form
        className="flex justify-center space-between "
        onSubmit={submitHandler}
      >
        <input
          ref={amountInputRef}
          id={`"amount_" + ${id}`}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          className="bg-[white] text-skin-primary border-2 mx-2 rounded-lg text-center"
        />
        <div className="">
          <button
            className="bg-black text-white mx-10 px-10 py-1 rounded-lg"
            type="submit"
            onClick={showModalHandler}
          >
            سبد خرید
          </button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </div>
      </form>
    </>
  );
};

export default ProductDetailForm;
