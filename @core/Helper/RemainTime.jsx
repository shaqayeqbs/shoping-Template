import React from "react";
import useTimer from "../hooks/useTimer";

function RemainTime() {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  const timerBtn = "bg-skin-opacity p-2 px-4 text-skin-primary rounded-md";
  const timerDevider = "text-skin-pzaarimary mx-2";
  return (
    <div>
      {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
        <h3 className="text-center my-2" dir="ltr">
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
