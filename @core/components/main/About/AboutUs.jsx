import React from "react";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <section className="flex container bg-green rounded-3xl text-[white] h-[26.8rem]">
      <div className="my-2 w-[55%] ml-4 mr-8 text-lg tracking-widest">
        <div>
          {" "}
          <h2 className="my-4 font-bold text-3xl">درباره ما</h2>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد.
        </div>
        <div className=" border-2 rounded-md w-[10rem] text-center my-6 py-2 p-1">
          {" "}
          <Link href="/">ادامه مطلب</Link>
        </div>
      </div>
      <div className="object-cover m-4">
        <Image src="/images/about.png" width={800} height={475} />
      </div>
    </section>
  );
}

export default AboutUs;
