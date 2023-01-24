import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <section className=" lg:flex container cadr  h-max">
      <div className="my-2 lg:w-[50%] ml-4 h-full mr-8 text-lg leading-9">
        <div>
          {" "}
          <h2 className="my-4 py-7  font-bold text-3xl w-full text-right">
            درباره ما
          </h2>
          <p className=" ml-8 w-full">
            {" "}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد.
          </p>
        </div>
        <div className=" border-primary text-skin-primary  border-2 rounded-md w-[10rem] text-center my-8 py-[1%] ">
          {" "}
          <Link href="/about-us">ادامه مطلب</Link>
        </div>
      </div>
      <div className="relative hidden lg:block lg:w-[60%] mr-8 pt-[9px] ">
        <img
          src="/images/about.png"
          // width="fill"
          // height={1650}
          layout="fill"
          className="object-cover rounded-[15px] p-0 m-0"
        />
      </div>
    </section>
  );
}

export default AboutUs;
