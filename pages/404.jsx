import Link from "next/link";
// import FourOFor from "../@core/icons/FourOFor";
// import dynamic from "next/dynamic";
import FourOFor from "../@core/icons/FourOFor";
// const FourOFor = dynamic(() => import("../@core/icons/FourOFor"));

export default function FourOhFour() {
  return (
    <section className=" container text-center !my-10">
      <div className=" mt-10 mb-20 mx-auto  w-[70%]">
        <FourOFor />
      </div>
      <h1 className="md:w-[30%] mx-auto text-center text-xl">
        صفحه مورد نظر شما یافت نشد.رفتن به
        <Link href="/" className="text-skin-primary">
          {" "}
          صفحه اصلی
        </Link>
      </h1>
    </section>
  );
}
