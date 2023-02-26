import Link from "next/link";
import { useSelector } from "react-redux";
function PriceDetails() {
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
        <span>{totalOffPrice}</span>
      </div>
      <div className=" flex justify-between">
        <div className=""> مبلغ قابل پرداخت</div>
        <span>{finalPrice}</span>
      </div>
      <div className="w-full">
        {hasItems && (
          <Link
            href="/shopping"
            className="bg-skin-fill text-[white] mx-auto inline-block text-center py-2 w-full mt-12 text-white font-medium  rounded-lg  my-2"
          >
            <div> ادامه فرآیند خرید</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PriceDetails;
