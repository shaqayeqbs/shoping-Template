import React from "react";
import { CallIncoming, Verify, Send2, Cards } from "iconsax-react";

function Description() {
  return (
    <section className="container flex justify-between">
      <div className="flex relative my-16">
        <div className="absolute top-3">
          <Verify size="36" className="text-green" variant="Bold" />
        </div>
        <div className="mr-12">
          <h3 className="font-bold text-lg mb-1">تضمین اصالت کالا </h3>
          <p className="text-sm">محصولات کاملا اورجینال</p>
        </div>
      </div>
      <div className="flex relative my-16">
        <div className="absolute top-3">
          <CallIncoming size="36" className="text-green" variant="Bold" />
        </div>
        <div className="mr-12">
          <h3 className="font-bold text-lg mb-1">پشتیبانی</h3>
          <p className="text-sm"> آماده پاسخگویی به شما </p>
        </div>
      </div>
      <div className="flex relative my-16">
        <div className="absolute top-3">
          <Send2 size="36" className="text-green" variant="Bold" />
        </div>
        <div className="mr-12">
          <h3 className="font-bold text-lg mb-1">ارسال سریع</h3>
          <p className="text-sm"> به تمام نقاط ایران </p>
        </div>
      </div>
      <div className="flex relative my-16">
        <div className="absolute top-3">
          <Cards size="36" className="text-green" variant="Bold" />
        </div>
        <div className="mr-12">
          <h3 className="font-bold text-xl mb-1">پرداخت آنلاین</h3>
          <p className="text-sm">با در گاه اینترنتی امن</p>
        </div>
      </div>
    </section>
  );
}

export default Description;
