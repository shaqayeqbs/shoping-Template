import { useSelector } from "react-redux";
// import Comments from "../@core/components/main/EditorItems/Comments";
import Event from "../@core/components/main/Event";
import "tailwindcss/tailwind.css";
import { Calendar } from "iconsax-react";
import Image from "next/image";
import moment from "jalali-moment";
import MainEditor from "../@core/components/main/EditorItems/MainEditor";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const ShopEvent = (props) => {
  const { events } = useSelector((state) => state.businessSlice);
  console.log(props);
  const startAt = digitsEnToFa(
    moment(props.timing.start_at, "YYYY-MM-DD")
      .locale("fa")
      .format("YYYY/MM/DD")
  );
  const endAt = digitsEnToFa(
    moment(props.timing.end_at, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")
  );

  return (
    <div className=" mt-16">
      <div className="lg:flex flex-col gap-5">
        <div className="lg:flex items-center justify-between">
          <h3 className="font-bold  lg:text-3xl mb-3 md:mb-0">{props.title}</h3>
          <div className="text-sm flex mb-8 md:mb-0 items-center justify-center ">
            <Calendar className="text-skin-primary ml-3" />
            <p className="mt-1">
              <span className="text-skin-primary">از</span> {startAt}{" "}
              <span className="mx-3 text-[skin-color]">
                {" "}
                <span className="text-skin-primary">تا</span>
              </span>{" "}
              {endAt}
            </p>
          </div>
        </div>
        <Image
          width={500}
          height={50}
          src={props?.files[0]?.details.location}
          alt={props?.title}
          className="rounded-xl w-full"
        />
        <MainEditor {...props} />
        {/* <Comments /> */}
        <section className="md:flex">
          {events?.slice(0, 2)?.map((item) => (
            <Event event={item} key={item?.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopEvent;
