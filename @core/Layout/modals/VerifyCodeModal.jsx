import React, { useState, useRef } from "react";
import Link from "next/link";
import useTimer from "../../hooks/useTimer";
// import { verifyCode, verifyPhone } from "../../../../@core/api/authApi";
// import PinField from "react-pin-field";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import TimeHistory from "../../icons/TimeHistory";

function VerifyCodeModal({ phone, onCodeVerified, returnToVerifyModal }) {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const codeInputRef = useRef("");

  const [minutes, seconds, Faminutes, Faseconds, refreshTimer] = useTimer();

  const btnClass = "w-full bg-skin-fill rounded-[5px] text-[white] py-2 mt-4";

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = { phone, code };
    if (code === "") {
      emptyInput();
      return;
    }
    setLoading(true);
    const response = await verifyCode(data);

    if (response === "OK") {
      onCodeVerified();
    } else {
      wrongCode();
    }
    setLoading(false);
  };

  const refreshHandler = async (event) => {
    if (event) {
      event.preventDefault();
    }
    setLoading(true);
    codeInputRef.current.forEach((input) => (input.value = ""));
    const data = { phone };
    refreshTimer();

    const response = await verifyPhone(data);
    setLoading(false);
  };
  return (
    <section className=" m-16 mx-auto w-[50%]">
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
      <form onSubmit={submitHandler}>
        <div dir="ltr">
          <input
            ref={codeInputRef}
            onChange={setCode}
            length={4}
            className=" border-2 w-full border-primary rounded-[6.3px] h-[40px] "
          />
        </div>
        <div className="absolute flex left-[27%] top-[38%] border-r-2 pr-4 border-primary">
          <span className="mt-[2px] ml-1 inline-block">
            {" "}
            {minutes === 0 && seconds === 0 ? null : (
              <h3 dir="ltr" className="text-[12px]">
                {Faminutes} :{seconds < 10 ? `۰${Faseconds}` : Faseconds}
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
          className="border-0 text-[12px] text-skin-primary"
        >
          ویرایش شماره
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
