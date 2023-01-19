import { ArrowLeft } from "iconsax-react";
import React, { useState } from "react";
import phoneRegex from "../../constants/PhoneRegex";

import Link from "next/link";
import { verifyPhone } from "../../api/authApi";
import {
  notValidPhone,
  persianKeyboard,
} from "../../constants/toasts-messages";
function VerifyPhoneModal({ onMobileVerified }) {
  // const phoneInputRef = useRef();
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneChangeHandler = (e) => {
    e.preventDefault();
    if (+e.target.value || +e.target.value === 0 || e.target.value === "+") {
      setPhone(e.target.value);
    } else {
      const position = e.target.selectionStart;
      e.target.value =
        e.target.value.substring(0, position - 1) +
        e.target.value.substring(position + 1);
    }
    if (
      phone === "" &&
      !phoneRegex(+e.target.value) &&
      !+e.target.value &&
      +e.target.value != 0 &&
      e.target.value != "+"
    ) {
      persianKeyboard();
      e.target.value = "";
    }
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    console.log({ phone });
    if (phone === "") {
      return;
    }
    if (!phoneRegex(phone)) {
      console.log("here");
      notValidPhone();
      return;
    }
    setIsSubmitting(true);
    const response = await verifyPhone({ phone });
    // const response = 200;
    console.log(response);

    if (response === 200) {
      console.log("ok");
      onMobileVerified(phone);
    }
  };

  return (
    <section className="m-16 mx-auto w-[80%] md:w-[52%]">
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
          maxLength="10"
          id="phone"
          name="phone"
          onChange={phoneChangeHandler}
          defaultValue={phone}
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
