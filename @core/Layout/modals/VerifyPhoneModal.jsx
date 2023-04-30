import { ArrowLeft } from "iconsax-react";
import React, { useState } from "react";
import phoneRegex from "../../constants/PhoneRegex";
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
import Link from "next/link";
import { verifyPhone } from "../../api/authApi";
import {
  notValidPhone,
  persianKeyboard,
} from "../../constants/toasts-messages";
function VerifyPhoneModal({ onMobileVerified, title, close }) {
  // const phoneInputRef = useRef();
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneChangeHandler = (val) => {
    // e.preventDefault();
    let enNum = digitsFaToEn(val);
    let faNum = digitsEnToFa(val);
    if (+enNum || +enNum === 0 || enNum === "+") {
      setPhone(faNum);
    }

    if (
      phone === "" &&
      !phoneRegex(+enNum) &&
      !+enNum &&
      +enNum != 0 &&
      val != "+"
    ) {
      persianKeyboard();
      setPhone("");
    }
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    let enNum = digitsFaToEn(phone);

    if (enNum === "") {
      return;
    }
    if (!phoneRegex(enNum)) {
      notValidPhone();
      return;
    }

    setIsSubmitting(true);
    const response = await verifyPhone({ phone: enNum });
    // const response = 200;

    if (response === 200) {
      onMobileVerified(enNum);
    }
  };

  return (
    <section className=" m-16 mt-5 mx-auto w-[80%] md:w-[52%]">
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
          maxLength="12"
          id="phone"
          name="phone"
          onChange={(e) => phoneChangeHandler(e.target.value)}
          value={phone}
          className="ltr border-2 w-full border-primary rounded-[6.3px] h-[40px] p-3"
        />
        <p className="text-[10px] my-2 text-[#6f6f6f]">
          <span>مثال:</span>
          <span> {digitsEnToFa("09112345678")}</span>
        </p>
        <div className="text-[12px] my-2 text-black font-medium">
          ورود شما به معنای پذیرش
          <Link href="/privacy-policy">
            <span
              className="text-skin-primary inline-block mx-1"
              onClick={close}
            >
              {" "}
              شرایط و قوانین
            </span>
          </Link>
          {title} است.
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
        <div className=" inline-block mt-5 pb-0 text-skin-primary text-[12px] font-medium">
          ورود با حساب بهزی
          <ArrowLeft size="16" className="inline-block mx-2 " />
        </div>
      </Link>
    </section>
  );
}

export default VerifyPhoneModal;
