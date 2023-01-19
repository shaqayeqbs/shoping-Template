import React from "react";
import useTimer from "../hooks/useTimer";

function RemainTime() {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer(
    5,
    6,
    40
  );
  const timerBtn =
    "bg-skin-secondary p-2 px-4 text-skin-primary w-full rounded-md";
  const timerDevider = "text-skin-pzaarimary mx-2 rtl w-full";
  return (
    <div className="w-max" dir="ltr">
      {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
        <h3 className="my-2 ltr text-center md:text-left">
          <span className={timerBtn}>{FaHours}</span>
          <span className={timerDevider}>:</span>
          <span className={timerBtn}>{Faminutes}</span>{" "}
          <span className={timerDevider}>:</span>
          {seconds < 10 ? (
            <span className={timerBtn}>۰{Faseconds}</span>
          ) : (
            <span className={timerBtn}>{Faseconds}</span>
          )}
        </h3>
      )}
    </div>
  );
}

export default RemainTime;
