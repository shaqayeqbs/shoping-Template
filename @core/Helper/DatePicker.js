import React, { useRef, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Input from "react-input-mask";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import moment from "jalali-moment";
const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  fixNumbers = function (str) {
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };

export default function PersianDatePicker({
  onAddDate,
  defaultDate = "--/--/--",
}) {
  const [myDate, setDate] = useState(
    defaultDate != "--/--/--"
      ? moment(defaultDate, "YYYY/MM/DD")?.locale("fa")?.format("YYYY/MM/DD")
      : ""
  );

  return (
    <div className="relative">
      <DatePicker
        calendarPosition="bottom-center"
        calendar={persian}
        locale={persian_fa}
        value={myDate}
        onChange={(date) => {
          const persinDate = date?.format("dddd DD MMMM YYYY");

          setDate(persinDate);
        }}
        render={
          <InputMask
            myDate={myDate}
            onAddDate={onAddDate}
            defaultDate={defaultDate}
          />
        }
      />
    </div>
  );
}

function InputMask({
  myDate,
  value,
  handleValueChange,
  openCalendar,
  onAddDate,
}) {
  const valueFinal = value ? fixNumbers(value.toString()) : "";
  console.log(
    valueFinal,
    moment.from(valueFinal, "fa", "YYYY/MM/DD").format("YYYY/MM/DD")
  );
  const test = moment.from(valueFinal, "fa", "YYYY/MM/DD").format("YYYY/MM/DD");
  const onClickHandler = () => {
    console.log("joooooooooooooo");
    if (test) {
      console.log(test);
      onAddDate(test);
    }
  };

  return (
    <Input
      locale={persian_fa}
      className=" border-0 w-full"
      maskChar="-"
      onFocus={openCalendar}
      onChange={handleValueChange}
      value={myDate}
      onClick={onClickHandler}
    />
  );
}
