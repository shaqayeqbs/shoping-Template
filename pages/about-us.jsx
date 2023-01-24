function aboutUs() {
  return (
    <section className="container">
      <h1 className="text-center my-4 mt-12">درباره هیوا گاردن 🌱</h1>
      <div className=" my-12">
        <img
          loading="lazy"
          src="/images/about.png"
          width={2000}
          height={1000}
          alt="about us"
          className="object-cover w-full mx-auto rounded-lg "
        />
      </div>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        لازم است.
      </p>
    </section>
  );
}
// export const getServerSideProps=()=>{
//   const res= api/call
// }

export default aboutUs;
