import Link from "next/link";
import { useSelector } from "react-redux";
function PriceDetails({ changeStep }) {
  const cartData = useSelector((state) => state.cart.items);

  const hasItems = cartData?.length || false;
  let finalPrice = 0;
  let offPrice = 0;
  let price = 0;
  let totalOffPrice = 0;
  let totalPrice = 0;

  for (const each in cartData) {
    finalPrice = finalPrice + +cartData[each].price?.final_price;
    offPrice = +cartData[each].price?.off_price * +cartData[each].qty;
    price = +cartData[each].price?.price * +cartData[each].qty;
    totalOffPrice = totalOffPrice + (price - offPrice);
    totalPrice = totalPrice + price;
  }
  return (
    <div className="w-full font-extrabold h-max bg-[white] ">
      <h3 className="text-center mb-8">جزئیات قیمت</h3>
      <div className=" flex justify-between">
        <div className="">قیمت محصولات :</div>
        <span>{totalPrice}</span>
      </div>
      <div className=" flex justify-between my-6 border-b-2 border-bordercolor pb-6 text-skin-primary">
        <div className="">تخفیف محصولات :</div>
        <span>{totalOffPrice || 0}</span>
      </div>
      <div className=" flex justify-between">
        <div className=""> مبلغ قابل پرداخت</div>
        <span>{finalPrice ? finalPrice : totalPrice}</span>
      </div>
      <div className="w-full">
        {hasItems && (
          <div>
            {!changeStep && (
              <Link
                href="/shopping"
                className="bg-skin-fill text-[white] mx-auto inline-block text-center py-2 w-full mt-12 text-white font-medium  rounded-lg  my-2"
              >
                <div> ادامه فرآیند خرید</div>
              </Link>
            )}
            {changeStep && (
              <button
                className="bg-skin-fill text-[white] mx-auto inline-block text-center py-2 w-full mt-12 text-white font-medium  rounded-lg  my-2"
                onClick={changeStep.bind(null, 2)}
              >
                {" "}
                <div> ادامه فرآیند خرید</div>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PriceDetails;
