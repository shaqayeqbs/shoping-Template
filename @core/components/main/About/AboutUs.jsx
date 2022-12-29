import React from "react";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <section className=" relative flex container gap-0 bg-skin-fill rounded-3xl text-[white] max-h-[30rem] ">
      <div className="my-2 w-[50%] ml-4 h-full mr-8 text-lg tracking-widest">
        <div>
          {" "}
          <h2 className="my-4 font-bold text-3xl w-full">درباره ما</h2>
          <div className="  w-full overflow-auto">
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
          </div>
        </div>
        <div className=" absolute bottom-[-2rem] border-2 rounded-md w-[10rem] text-center my-16 py-[1%] ">
          {" "}
          <Link href="/">ادامه مطلب</Link>
        </div>
      </div>
      <div className=" m-4 w-[50%] text-left  max-h-[100%] overflow-hidden">
        <Image
          src="/images/about.png"
          width={600}
          height={480}
          className="object-cover w-full h-screen rounded-2xl"
        />
      </div>
    </section>
  );
}

export default AboutUs;
