import { ArrowLeft, ArrowRight } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userData } from "../../../store/Slices/UserSlice";
import { verifyPhone } from "../../api/authApi";
import useTimer from "../../hooks/useTimer";
import TimeHistory from "../../icons/TimeHistory";
import LoadingSpinner from "../../UI/LoadingSpinner";
function VerifyCodeModal({ phone, onCodeVerified, returnToVerifyModal }) {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  console.log(phone);
  const [hours, minutes, seconds, farsMin, FaHours, Faseconds, refreshTimer] =
    useTimer(0, 2, 0);

  const btnClass = "w-full bg-skin-fill rounded-[5px] text-[white] py-2 mt-4";

  const refreshHandler = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const data = { phone };
    refreshTimer(0, 2, 0);
    const response = await verifyPhone(phone);
  };

  const onChangeCodeHandler = async (e) => {
    setCode(e.target.value);
    const temp = e.target.value;

    if (temp.length === 5) {
      setLoading(true);
      const data = { phone, code: temp.toString() };
      const response = await dispatch(userData(data));
      console.log(response);

      if (response?.payload?.status === 200) {
        console.log("loggedIn ");
        onCodeVerified();
      }

      setLoading(false);
    }
  };
  return (
    <section className=" m-16 mx-auto w-[80%] md:w-[52%]">
      {loading && <LoadingSpinner />}
      <button
        onClick={returnToVerifyModal}
        className="absolute top-[4%] right-4 border-0"
      >
        بازگشت
        <ArrowRight size="16" className="inline-block mx-2 " />
      </button>
      <h3>
        ثبت نام
        <span className="text-skin-primary"> | </span>
        ورود
      </h3>
      <div className="text-[12px] my-4 font-medium ">
        <div>سلام!</div>
        <p>لطفا شماره موبایل خود را وارد کنید</p>
      </div>
      <form>
        <div dir="ltr">
          <input
            onChange={onChangeCodeHandler}
            length={4}
            className=" border-2 w-full border-primary rounded-[6.3px] h-[40px] p-3"
          />
        </div>
        <div className="absolute flex left-[13%] md:left-[27%] top-[38%] border-r-2 pr-4 border-primary">
          <span className="mt-[px] ml-1 inline-block">
            {" "}
            {minutes === 0 && seconds === 0 ? (
              <h3 className="text-[12px] !mt-1">۰:۰</h3>
            ) : (
              <h3 dir="rtl">
                {seconds < 10 ? `۰${Faseconds}` : Faseconds} : {farsMin}
              </h3>
            )}
          </span>
          <span className=" text-skin-primary font-xl">
            {" "}
            <TimeHistory />
          </span>
        </div>
        <p className="text-[10px] my-2 text-[#6f6f6f]">
          کد تایید باید ۵ رقم باشد.{" "}
        </p>
        <button
          onClick={returnToVerifyModal}
          className="border-0 text-[12px] text-skin-primary hover:bg-[transparent] hover:none hover:text-skin-primary  hover:underline"
        >
          <div className="hover:text-skin-primary  hover:underline">
            {" "}
            ویرایش شماره
          </div>
        </button>
        <div>
          {minutes === 0 && seconds === 0 ? (
            <div>
              <button className={btnClass} onClick={refreshHandler}>
                ارسال مجدد کد
              </button>
            </div>
          ) : (
            <div>
              <button className={btnClass} disabled>
                ارسال مجدد کد
              </button>
            </div>
          )}
        </div>

        {/* <div>
          <button
            type="submit"
            disabled={minutes === 0 && seconds === 0 ? true : false}
          >
            <span>تایید</span>
          </button>
        </div> */}
      </form>
      <Link href="/">
        <div className="my-10 text-skin-primary text-[12px] font-medium">
          ورود با حساب بهزی
          <ArrowLeft size="16" className="inline-block mx-2 " />
        </div>
      </Link>
    </section>
  );
}

export default VerifyCodeModal;
