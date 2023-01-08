import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "iconsax-react";
import phoneRegex from "../../constants/PhoneRegex";
// import { verifyPhone } from "../../../../@core/api/authApi";
import Link from "next/link";

function VerifyPhoneModal({ onMobileVerified }) {
  const phoneInputRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitHandler = async (event) => {
    event.preventDefault();
    const phone = phoneInputRef.current.value;
    if (phone === "") {
      console.log("empty input");
      return;
    }
    if (!phoneRegex(phone)) {
      console.log("wrong phone");
      return;
    }
    setIsSubmitting(true);
    // const response = await verifyPhone({ phone });
    const response = 201;

    if (response === 201) {
      onMobileVerified(phone);
    }
  };

  return (
    <section className="m-16 mx-auto w-[52%]">
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
        <input
          dir="ltr"
          type="tel"
          id="phone"
          name="phone"
          ref={phoneInputRef}
          className="border-2 w-full border-primary rounded-[6.3px] h-[40px] p-3"
        />
        <p className="text-[10px] my-2 text-[#6f6f6f]">مثال: 09112345678</p>
        <div className="text-[12px] my-2 text-black font-medium">
          ورود شما به معنای پذیرش
          <span className="text-skin-primary inline-block mx-1">
            {" "}
            شرایط و قوانین
          </span>
          باغ هیوا است.
        </div>

        <div>
          <button
            className="w-full bg-skin-fill rounded-[5px] text-[white] py-2 mt-4"
            type="submit"
            disabled={isSubmitting ? true : false}
          >
            <span> دریافت کد تایید </span>
          </button>
        </div>
      </form>

      <Link href="/">
        <a className=" inline-block mt-5 pb-0 text-skin-primary text-[12px] font-medium">
          ورود با حساب بهزی
          <ArrowLeft size="16" className="inline-block mx-2 " />
        </a>
      </Link>
    </section>
  );
}

export default VerifyPhoneModal;
