import Image from "next/image";
import moment from "jalali-moment";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Fragment } from "react";
import { Calendar } from "iconsax-react";


const EditorHeader = (props) => {
    console.log(props);
    const startAt = digitsEnToFa(
      moment(props.data.timing.start_at, "YYYY-MM-DD").locale("fa").format("YYYY/MM/DD")
    );
    const endAt = digitsEnToFa(
      moment(props.data.timing.end_at, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")
    );

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl">{props.data.title}</h3>
        <div className="text-sm flex items-center justify-center">
          <Calendar className="text-skin-primary ml-3"/><p className="mt-1"><span className="text-skin-primary">از</span> {startAt} <span className="mx-3 text-[skin-color]"> <span className="text-skin-primary">تا</span></span> {endAt}</p>
        </div>
      </div>
      <Image
        width={500}
        height={50}
        src={props.data.files[0].details.location}
        alt={props.title}
        className="rounded-xl w-full"
      />
    </Fragment>
  );
};

export default EditorHeader;
